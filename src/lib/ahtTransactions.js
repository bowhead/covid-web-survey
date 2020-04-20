const Tx = require('ethereumjs-tx').Transaction;
const Common = require('ethereumjs-common').default;
const web3Factory = require('./web3Helper');
const gameAbi = require('../lib/contracts/gameAbi.json');

/**
 * Sings locally a transaction
 * @param {Object} rawTx The transaction data
 * @param {String} pk The private key to sing the transaction
 * @return {String} The serialized transaction
 */
function singTransaction(rawTx, pk) {
    const customCommon = Common.forCustomChain(
        'mainnet',
        {
            'name': 'aht',
            'chainId': Number(rawTx.chainId)
        },
        'petersburg'
    );
    let tx = new Tx(rawTx, { 'common': customCommon });
    tx.sign(Buffer.from(pk, 'hex'));

    return tx.serialize();
}

/**
 * Sends the transaction to the blockchain
 * @param {Object} web3 The web3 instance
 * @param {Object} tx The signed transaction
 * @return {Promise} A promise resolved when the transaction is sent
 */
function sendSignedTransaction(web3, tx){
    return new Promise((resolve, reject) => {
        web3.aht.sendRawTransaction('0x' + tx.toString('hex'), (err, hash) => {
            if (err) {
                reject({
                    'status': 500,
                    'message': 'Blockchain Error: sending transaction',
                    'systemMessage': err
                })
            }

            resolve(hash);
        })
    })
}

/**
 * Returns the user transaction once
 * @param {Object} web3 The web3 instance
 * @param {String} address The address to get the nonce
 * @return {Promise} A resolved promise when the nonce is retrieved
 */
function getNonce(web3, address) {
    return new Promise((resolve, reject) => {
        web3.aht.getTransactionCount(address, (err, nonce) => {
            if (err) {
                reject({
                    'status': 500,
                    'message': 'Blockchain error: calculating the nonce',
                    'systemMessage': err
                });
                return;
            }

            let lastNonce = Number(window.localStorage.getItem('nonce'))

            if(lastNonce === undefined || lastNonce === null || lastNonce === 'null' || lastNonce < nonce || lastNonce === 0 ) {
                window.localStorage.setItem('nonce', nonce);
                lastNonce = nonce;
            } else {
                lastNonce++;
                window.localStorage.setItem('nonce', lastNonce);
            }

            resolve(lastNonce);
        })
    })
}

/**
 * Returns the transaction receipt
 * @param {Object} web3 The web3 instance
 * @param {String} txtHash The transaction hash
 * @return {Promise<Object>}    A promise resolved with the tranasction data
 */
function getTransactionReceipt(web3, txHash) {
    return new Promise((resolve, reject) => {
        web3.aht.getTransactionReceipt(txHash, (err, result) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(result);
        });
    });
}

async function addSurveyData(txData) {
    let web3 = web3Factory.getInstance();
    let contract = web3.aht.contract(gameAbi).at(txData.contractAddress)
    let rawTx = {
        'to': txData.contractAddress,
        'nonce': web3.toHex(await getNonce(web3, txData.address)),
        'gasPrice': 0,
        'gasLimit': 50000000,
        'value': '0x0',
        'data': contract.saveHash.getData(
            'COVID19_Survey',
            web3.toHex(txData.hash1),
            web3.toHex(txData.hash2),
            (+ new Date) 
        ),
        'chainId': txData.chainId
    };

    try {
        let signedTx = singTransaction(rawTx, txData.privateKey),
            results = await sendSignedTransaction(web3, signedTx);

        return results;
    } catch (error) {
        console.log(error)
        throw 'Could not store the data into the smart contract';
    }
}


export {
    addSurveyData,
    getTransactionReceipt
}