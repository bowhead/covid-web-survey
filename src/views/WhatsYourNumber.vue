<template>
    <div class="container whats-your-number">
        <div class="row pt-3">
            <div class="offset-1 col-10 offset-md-2 col-md-8 text-center">
                <vm-progress :percentage="55" :show-text="false" :stroke-width="12" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-12 text-center">
                <img src="../assets/phone.png">               
            </div>
        </div>
        <div class="row row-title">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <label class="title">{{ $t('whatsYourNumber.title') }}</label>  
            </div>
        </div>
        <div class="row pt-2">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <label class="info">{{ $t('whatsYourNumber.info') }}</label>  
            </div>
        </div>
        <div class="row">
            <div class="offset-1 col-10 offset-md-3 col-md-6 col-number">
                <div class="row">
                    <div class="col-2 my-auto">
                        <span class="code">{{ country.dial_code }}</span>
                    </div>
                    <div class="col-7">
                        <input v-model="phone" class="phone-number" type="tel">
                    </div>
                    <div class="col-3 text-center my-auto" @click="show">
                        <country-flag :country="country.code" size='normal' />
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-3">
            <div class="offset-5 col-2 text-center">
                <hr>
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 offset-md-4 col-md-4 text-center">
                <button id="get-sign-in-code" class="btn btn-lg text-light continue" @click="sendMessage"><b>{{ $t('general.continue') }}</b></button>               
            </div>
        </div>
        <modal name="countries"
        :adaptive="true"
        height="auto"
        :scrollable="true"
        :reset="true">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-back my-auto">
                        <i @click="back" class="fas fa-arrow-left fa-lg"></i>
                    </div>
                </div>
                <div @click="selectCountry(c)" class="row" v-for="c in countries" :key="c.code">
                    <div class="col-2">
                        <country-flag :country="c.code" size='normal'/>
                    </div>
                    <div class="col-8 my-auto">
                        <span class="country-name"> {{ c.label }}</span>
                    </div>
                    <div class="col-1">
                        <span class="text-muted">{{ c.dial_code }}</span>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import firebase from 'firebase'
import CountryFlag from 'vue-country-flag'

    export default {
        components: {
            CountryFlag
        },
        data () {
            return {
                phone: '',
                country: {  
                    "label":"Canada",
                    "dial_code":"+1",
                    "code":"CA"
                },
                countries: [
                            {
                                "label":"Afghanistan",
                                "dial_code":"+93",
                                "code":"AF"
                            },
                            {
                                "label":"Åland Islands",
                                "dial_code":"+358",
                                "code":"AX"
                            },
                            {
                                "label":"Albania",
                                "dial_code":"+355",
                                "code":"AL"
                            },
                            {
                                "label":"Algeria",
                                "dial_code":"+213",
                                "code":"DZ"
                            },
                            {
                                "label":"American Samoa",
                                "dial_code":"+1684",
                                "code":"AS"
                            },
                            {
                                "label":"Andorra",
                                "dial_code":"+376",
                                "code":"AND"
                            },
                            {
                                "label":"Angola",
                                "dial_code":"+244",
                                "code":"AO"
                            },
                            {
                                "label":"Anguilla",
                                "dial_code":"+1264",
                                "code":"AI"
                            },
                            {
                                "label":"Antarctica",
                                "dial_code":"+672",
                                "code":"AQ"
                            },
                            {
                                "label":"Antigua and Barbuda",
                                "dial_code":"+1268",
                                "code":"AG"
                            },
                            {
                                "label":"Argentina",
                                "dial_code":"+54",
                                "code":"AR"
                            },
                            {
                                "label":"Armenia",
                                "dial_code":"+374",
                                "code":"AM"
                            },
                            {
                                "label":"Aruba",
                                "dial_code":"+297",
                                "code":"AW"
                            },
                            {
                                "label":"Australia",
                                "dial_code":"+61",
                                "code":"AU"
                            },
                            {
                                "label":"Austria",
                                "dial_code":"+43",
                                "code":"AT"
                            },
                            {
                                "label":"Azerbaijan",
                                "dial_code":"+994",
                                "code":"AZ"
                            },
                            {
                                "label":"Bahamas",
                                "dial_code":"+1242",
                                "code":"BS"
                            },
                            {
                                "label":"Bahrain",
                                "dial_code":"+973",
                                "code":"BH"
                            },
                            {
                                "label":"Bangladesh",
                                "dial_code":"+880",
                                "code":"BD"
                            },
                            {
                                "label":"Barbados",
                                "dial_code":"+1246",
                                "code":"BB"
                            },
                            {
                                "label":"Belarus",
                                "dial_code":"+375",
                                "code":"BY"
                            },
                            {
                                "label":"Belgium",
                                "dial_code":"+32",
                                "code":"BE"
                            },
                            {
                                "label":"Belize",
                                "dial_code":"+501",
                                "code":"BZ"
                            },
                            {
                                "label":"Benin",
                                "dial_code":"+229",
                                "code":"BJ"
                            },
                            {
                                "label":"Bermuda",
                                "dial_code":"+1441",
                                "code":"BM"
                            },
                            {
                                "label":"Bhutan",
                                "dial_code":"+975",
                                "code":"BT"
                            },
                            {
                                "label":"Bolivia, Plurinational State of bolivia",
                                "dial_code":"+591",
                                "code":"BO"
                            },
                            {
                                "label":"Bosnia and Herzegovina",
                                "dial_code":"+387",
                                "code":"BA"
                            },
                            {
                                "label":"Botswana",
                                "dial_code":"+267",
                                "code":"BW"
                            },
                            {
                                "label":"Bouvet Island",
                                "dial_code":"+47",
                                "code":"BV"
                            },
                            {
                                "label":"Brazil",
                                "dial_code":"+55",
                                "code":"BR"
                            },
                            {
                                "label":"British Indian Ocean Territory",
                                "dial_code":"+246",
                                "code":"IO"
                            },
                            {
                                "label":"Brunei Darussalam",
                                "dial_code":"+673",
                                "code":"BN"
                            },
                            {
                                "label":"Bulgaria",
                                "dial_code":"+359",
                                "code":"BG"
                            },
                            {
                                "label":"Burkina Faso",
                                "dial_code":"+226",
                                "code":"BF"
                            },
                            {
                                "label":"Burundi",
                                "dial_code":"+257",
                                "code":"BI"
                            },
                            {
                                "label":"Cambodia",
                                "dial_code":"+855",
                                "code":"KH"
                            },
                            {
                                "label":"Cameroon",
                                "dial_code":"+237",
                                "code":"CM"
                            },
                            {
                                "label":"Canada",
                                "dial_code":"+1",
                                "code":"CA"
                            },
                            {
                                "label":"Cape Verde",
                                "dial_code":"+238",
                                "code":"CV"
                            },
                            {
                                "label":"Cayman Islands",
                                "dial_code":"+ 345",
                                "code":"KY"
                            },
                            {
                                "label":"Central African Republic",
                                "dial_code":"+236",
                                "code":"CF"
                            },
                            {
                                "label":"Chad",
                                "dial_code":"+235",
                                "code":"TD"
                            },
                            {
                                "label":"Chile",
                                "dial_code":"+56",
                                "code":"CL"
                            },
                            {
                                "label":"China",
                                "dial_code":"+86",
                                "code":"CN"
                            },
                            {
                                "label":"Christmas Island",
                                "dial_code":"+61",
                                "code":"CX"
                            },
                            {
                                "label":"Cocos (Keeling) Islands",
                                "dial_code":"+61",
                                "code":"CC"
                            },
                            {
                                "label":"Colombia",
                                "dial_code":"+57",
                                "code":"CO"
                            },
                            {
                                "label":"Comoros",
                                "dial_code":"+269",
                                "code":"KM"
                            },
                            {
                                "label":"Congo",
                                "dial_code":"+242",
                                "code":"CG"
                            },
                            {
                                "label":"Congo, The Democratic Republic of the Congo",
                                "dial_code":"+243",
                                "code":"CD"
                            },
                            {
                                "label":"Cook Islands",
                                "dial_code":"+682",
                                "code":"CK"
                            },
                            {
                                "label":"Costa Rica",
                                "dial_code":"+506",
                                "code":"CR"
                            },
                            {
                                "label":"Cote d'Ivoire",
                                "dial_code":"+225",
                                "code":"CI"
                            },
                            {
                                "label":"Croatia",
                                "dial_code":"+385",
                                "code":"HR"
                            },
                            {
                                "label":"Cuba",
                                "dial_code":"+53",
                                "code":"CU"
                            },
                            {
                                "label":"Cyprus",
                                "dial_code":"+357",
                                "code":"CY"
                            },
                            {
                                "label":"Czech Republic",
                                "dial_code":"+420",
                                "code":"CZ"
                            },
                            {
                                "label":"Denmark",
                                "dial_code":"+45",
                                "code":"DK"
                            },
                            {
                                "label":"Djibouti",
                                "dial_code":"+253",
                                "code":"DJ"
                            },
                            {
                                "label":"Dominica",
                                "dial_code":"+1767",
                                "code":"DM"
                            },
                            {
                                "label":"Dominican Republic",
                                "dial_code":"+1849",
                                "code":"DO"
                            },
                            {
                                "label":"Ecuador",
                                "dial_code":"+593",
                                "code":"EC"
                            },
                            {
                                "label":"Egypt",
                                "dial_code":"+20",
                                "code":"EG"
                            },
                            {
                                "label":"El Salvador",
                                "dial_code":"+503",
                                "code":"SV"
                            },
                            {
                                "label":"Equatorial Guinea",
                                "dial_code":"+240",
                                "code":"GQ"
                            },
                            {
                                "label":"Eritrea",
                                "dial_code":"+291",
                                "code":"ER"
                            },
                            {
                                "label":"Estonia",
                                "dial_code":"+372",
                                "code":"EE"
                            },
                            {
                                "label":"Ethiopia",
                                "dial_code":"+251",
                                "code":"ET"
                            },
                            {
                                "label":"Falkland Islands (Malvinas)",
                                "dial_code":"+500",
                                "code":"FK"
                            },
                            {
                                "label":"Faroe Islands",
                                "dial_code":"+298",
                                "code":"FO"
                            },
                            {
                                "label":"Fiji",
                                "dial_code":"+679",
                                "code":"FJ"
                            },
                            {
                                "label":"Finland",
                                "dial_code":"+358",
                                "code":"FI"
                            },
                            {
                                "label":"France",
                                "dial_code":"+33",
                                "code":"FR"
                            },
                            {
                                "label":"French Guiana",
                                "dial_code":"+594",
                                "code":"GF"
                            },
                            {
                                "label":"French Polynesia",
                                "dial_code":"+689",
                                "code":"PF"
                            },
                            {
                                "label":"French Southern Territories",
                                "dial_code":"+262",
                                "code":"TF"
                            },
                            {
                                "label":"Gabon",
                                "dial_code":"+241",
                                "code":"GA"
                            },
                            {
                                "label":"Gambia",
                                "dial_code":"+220",
                                "code":"GM"
                            },
                            {
                                "label":"Georgia",
                                "dial_code":"+995",
                                "code":"GE"
                            },
                            {
                                "label":"Germany",
                                "dial_code":"+49",
                                "code":"DE"
                            },
                            {
                                "label":"Ghana",
                                "dial_code":"+233",
                                "code":"GH"
                            },
                            {
                                "label":"Gibraltar",
                                "dial_code":"+350",
                                "code":"GI"
                            },
                            {
                                "label":"Greece",
                                "dial_code":"+30",
                                "code":"GR"
                            },
                            {
                                "label":"Greenland",
                                "dial_code":"+299",
                                "code":"GL"
                            },
                            {
                                "label":"Grenada",
                                "dial_code":"+1473",
                                "code":"GD"
                            },
                            {
                                "label":"Guadeloupe",
                                "dial_code":"+590",
                                "code":"GP"
                            },
                            {
                                "label":"Guam",
                                "dial_code":"+1671",
                                "code":"GU"
                            },
                            {
                                "label":"Guatemala",
                                "dial_code":"+502",
                                "code":"GT"
                            },
                            {
                                "label":"Guernsey",
                                "dial_code":"+44",
                                "code":"GG"
                            },
                            {
                                "label":"Guinea",
                                "dial_code":"+224",
                                "code":"GN"
                            },
                            {
                                "label":"Guinea-Bissau",
                                "dial_code":"+245",
                                "code":"GW"
                            },
                            {
                                "label":"Guyana",
                                "dial_code":"+592",
                                "code":"GY"
                            },
                            {
                                "label":"Haiti",
                                "dial_code":"+509",
                                "code":"HT"
                            },
                            {
                                "label":"Heard Island and Mcdonald Islands",
                                "dial_code":"+0",
                                "code":"HM"
                            },
                            {
                                "label":"Holy See (Vatican City State)",
                                "dial_code":"+379",
                                "code":"VA"
                            },
                            {
                                "label":"Honduras",
                                "dial_code":"+504",
                                "code":"HN"
                            },
                            {
                                "label":"Hong Kong",
                                "dial_code":"+852",
                                "code":"HK"
                            },
                            {
                                "label":"Hungary",
                                "dial_code":"+36",
                                "code":"HU"
                            },
                            {
                                "label":"Iceland",
                                "dial_code":"+354",
                                "code":"IS"
                            },
                            {
                                "label":"India",
                                "dial_code":"+91",
                                "code":"IN"
                            },
                            {
                                "label":"Indonesia",
                                "dial_code":"+62",
                                "code":"ID"
                            },
                            {
                                "label":"Iran, Islamic Republic of Persian Gulf",
                                "dial_code":"+98",
                                "code":"IR"
                            },
                            {
                                "label":"Iraq",
                                "dial_code":"+964",
                                "code":"IQ"
                            },
                            {
                                "label":"Ireland",
                                "dial_code":"+353",
                                "code":"IE"
                            },
                            {
                                "label":"Isle of Man",
                                "dial_code":"+44",
                                "code":"IM"
                            },
                            {
                                "label":"Israel",
                                "dial_code":"+972",
                                "code":"IL"
                            },
                            {
                                "label":"Italy",
                                "dial_code":"+39",
                                "code":"IT"
                            },
                            {
                                "label":"Jamaica",
                                "dial_code":"+1876",
                                "code":"JM"
                            },
                            {
                                "label":"Japan",
                                "dial_code":"+81",
                                "code":"JP"
                            },
                            {
                                "label":"Jersey",
                                "dial_code":"+44",
                                "code":"JE"
                            },
                            {
                                "label":"Jordan",
                                "dial_code":"+962",
                                "code":"JO"
                            },
                            {
                                "label":"Kazakhstan",
                                "dial_code":"+7",
                                "code":"KZ"
                            },
                            {
                                "label":"Kenya",
                                "dial_code":"+254",
                                "code":"KE"
                            },
                            {
                                "label":"Kiribati",
                                "dial_code":"+686",
                                "code":"KI"
                            },
                            {
                                "label":"Korea, Democratic People's Republic of Korea",
                                "dial_code":"+850",
                                "code":"KP"
                            },
                            {
                                "label":"Korea, Republic of South Korea",
                                "dial_code":"+82",
                                "code":"KR"
                            },
                            {
                                "label":"Kosovo",
                                "dial_code":"+383",
                                "code":"XK"
                            },
                            {
                                "label":"Kuwait",
                                "dial_code":"+965",
                                "code":"KW"
                            },
                            {
                                "label":"Kyrgyzstan",
                                "dial_code":"+996",
                                "code":"KG"
                            },
                            {
                                "label":"Laos",
                                "dial_code":"+856",
                                "code":"LA"
                            },
                            {
                                "label":"Latvia",
                                "dial_code":"+371",
                                "code":"LV"
                            },
                            {
                                "label":"Lebanon",
                                "dial_code":"+961",
                                "code":"LB"
                            },
                            {
                                "label":"Lesotho",
                                "dial_code":"+266",
                                "code":"LS"
                            },
                            {
                                "label":"Liberia",
                                "dial_code":"+231",
                                "code":"LR"
                            },
                            {
                                "label":"Libyan Arab Jamahiriya",
                                "dial_code":"+218",
                                "code":"LY"
                            },
                            {
                                "label":"Liechtenstein",
                                "dial_code":"+423",
                                "code":"LI"
                            },
                            {
                                "label":"Lithuania",
                                "dial_code":"+370",
                                "code":"LT"
                            },
                            {
                                "label":"Luxembourg",
                                "dial_code":"+352",
                                "code":"LU"
                            },
                            {
                                "label":"Macao",
                                "dial_code":"+853",
                                "code":"MO"
                            },
                            {
                                "label":"Macedonia",
                                "dial_code":"+389",
                                "code":"MK"
                            },
                            {
                                "label":"Madagascar",
                                "dial_code":"+261",
                                "code":"MG"
                            },
                            {
                                "label":"Malawi",
                                "dial_code":"+265",
                                "code":"MW"
                            },
                            {
                                "label":"Malaysia",
                                "dial_code":"+60",
                                "code":"MY"
                            },
                            {
                                "label":"Maldives",
                                "dial_code":"+960",
                                "code":"MV"
                            },
                            {
                                "label":"Mali",
                                "dial_code":"+223",
                                "code":"ML"
                            },
                            {
                                "label":"Malta",
                                "dial_code":"+356",
                                "code":"MT"
                            },
                            {
                                "label":"Marshall Islands",
                                "dial_code":"+692",
                                "code":"MH"
                            },
                            {
                                "label":"Martinique",
                                "dial_code":"+596",
                                "code":"MQ"
                            },
                            {
                                "label":"Mauritania",
                                "dial_code":"+222",
                                "code":"MR"
                            },
                            {
                                "label":"Mauritius",
                                "dial_code":"+230",
                                "code":"MU"
                            },
                            {
                                "label":"Mayotte",
                                "dial_code":"+262",
                                "code":"YT"
                            },
                            {
                                "label":"Mexico",
                                "dial_code":"+52",
                                "code":"MX"
                            },
                            {
                                "label":"Micronesia, Federated States of Micronesia",
                                "dial_code":"+691",
                                "code":"FM"
                            },
                            {
                                "label":"Moldova",
                                "dial_code":"+373",
                                "code":"MD"
                            },
                            {
                                "label":"Monaco",
                                "dial_code":"+377",
                                "code":"MC"
                            },
                            {
                                "label":"Mongolia",
                                "dial_code":"+976",
                                "code":"MN"
                            },
                            {
                                "label":"Montenegro",
                                "dial_code":"+382",
                                "code":"ME"
                            },
                            {
                                "label":"Montserrat",
                                "dial_code":"+1664",
                                "code":"MS"
                            },
                            {
                                "label":"Morocco",
                                "dial_code":"+212",
                                "code":"MA"
                            },
                            {
                                "label":"Mozambique",
                                "dial_code":"+258",
                                "code":"MZ"
                            },
                            {
                                "label":"Myanmar",
                                "dial_code":"+95",
                                "code":"MM"
                            },
                            {
                                "label":"Namibia",
                                "dial_code":"+264",
                                "code":"NA"
                            },
                            {
                                "label":"Nauru",
                                "dial_code":"+674",
                                "code":"NR"
                            },
                            {
                                "label":"Nepal",
                                "dial_code":"+977",
                                "code":"NP"
                            },
                            {
                                "label":"Netherlands",
                                "dial_code":"+31",
                                "code":"NL"
                            },
                            {
                                "label":"Netherlands Antilles",
                                "dial_code":"+599",
                                "code":"AN"
                            },
                            {
                                "label":"New Caledonia",
                                "dial_code":"+687",
                                "code":"NC"
                            },
                            {
                                "label":"New Zealand",
                                "dial_code":"+64",
                                "code":"NZ"
                            },
                            {
                                "label":"Nicaragua",
                                "dial_code":"+505",
                                "code":"NI"
                            },
                            {
                                "label":"Niger",
                                "dial_code":"+227",
                                "code":"NE"
                            },
                            {
                                "label":"Nigeria",
                                "dial_code":"+234",
                                "code":"NG"
                            },
                            {
                                "label":"Niue",
                                "dial_code":"+683",
                                "code":"NU"
                            },
                            {
                                "label":"Norfolk Island",
                                "dial_code":"+672",
                                "code":"NF"
                            },
                            {
                                "label":"Northern Mariana Islands",
                                "dial_code":"+1670",
                                "code":"MP"
                            },
                            {
                                "label":"Norway",
                                "dial_code":"+47",
                                "code":"NO"
                            },
                            {
                                "label":"Oman",
                                "dial_code":"+968",
                                "code":"OM"
                            },
                            {
                                "label":"Pakistan",
                                "dial_code":"+92",
                                "code":"PK"
                            },
                            {
                                "label":"Palau",
                                "dial_code":"+680",
                                "code":"PW"
                            },
                            {
                                "label":"Palestinian Territory, Occupied",
                                "dial_code":"+970",
                                "code":"PS"
                            },
                            {
                                "label":"Panama",
                                "dial_code":"+507",
                                "code":"PA"
                            },
                            {
                                "label":"Papua New Guinea",
                                "dial_code":"+675",
                                "code":"PG"
                            },
                            {
                                "label":"Paraguay",
                                "dial_code":"+595",
                                "code":"PY"
                            },
                            {
                                "label":"Peru",
                                "dial_code":"+51",
                                "code":"PE"
                            },
                            {
                                "label":"Philippines",
                                "dial_code":"+63",
                                "code":"PH"
                            },
                            {
                                "label":"Pitcairn",
                                "dial_code":"+64",
                                "code":"PN"
                            },
                            {
                                "label":"Poland",
                                "dial_code":"+48",
                                "code":"PL"
                            },
                            {
                                "label":"Portugal",
                                "dial_code":"+351",
                                "code":"PT"
                            },
                            {
                                "label":"Puerto Rico",
                                "dial_code":"+1939",
                                "code":"PR"
                            },
                            {
                                "label":"Qatar",
                                "dial_code":"+974",
                                "code":"QA"
                            },
                            {
                                "label":"Romania",
                                "dial_code":"+40",
                                "code":"RO"
                            },
                            {
                                "label":"Russia",
                                "dial_code":"+7",
                                "code":"RU"
                            },
                            {
                                "label":"Rwanda",
                                "dial_code":"+250",
                                "code":"RW"
                            },
                            {
                                "label":"Reunion",
                                "dial_code":"+262",
                                "code":"RE"
                            },
                            {
                                "label":"Saint Barthelemy",
                                "dial_code":"+590",
                                "code":"BL"
                            },
                            {
                                "label":"Saint Helena, Ascension and Tristan Da Cunha",
                                "dial_code":"+290",
                                "code":"SH"
                            },
                            {
                                "label":"Saint Kitts and Nevis",
                                "dial_code":"+1869",
                                "code":"KN"
                            },
                            {
                                "label":"Saint Lucia",
                                "dial_code":"+1758",
                                "code":"LC"
                            },
                            {
                                "label":"Saint Martin",
                                "dial_code":"+590",
                                "code":"MF"
                            },
                            {
                                "label":"Saint Pierre and Miquelon",
                                "dial_code":"+508",
                                "code":"PM"
                            },
                            {
                                "label":"Saint Vincent and the Grenadines",
                                "dial_code":"+1784",
                                "code":"VC"
                            },
                            {
                                "label":"Samoa",
                                "dial_code":"+685",
                                "code":"WS"
                            },
                            {
                                "label":"San Marino",
                                "dial_code":"+378",
                                "code":"SM"
                            },
                            {
                                "label":"Sao Tome and Principe",
                                "dial_code":"+239",
                                "code":"ST"
                            },
                            {
                                "label":"Saudi Arabia",
                                "dial_code":"+966",
                                "code":"SA"
                            },
                            {
                                "label":"Senegal",
                                "dial_code":"+221",
                                "code":"SN"
                            },
                            {
                                "label":"Serbia",
                                "dial_code":"+381",
                                "code":"RS"
                            },
                            {
                                "label":"Seychelles",
                                "dial_code":"+248",
                                "code":"SC"
                            },
                            {
                                "label":"Sierra Leone",
                                "dial_code":"+232",
                                "code":"SL"
                            },
                            {
                                "label":"Singapore",
                                "dial_code":"+65",
                                "code":"SG"
                            },
                            {
                                "label":"Slovakia",
                                "dial_code":"+421",
                                "code":"SK"
                            },
                            {
                                "label":"Slovenia",
                                "dial_code":"+386",
                                "code":"SI"
                            },
                            {
                                "label":"Solomon Islands",
                                "dial_code":"+677",
                                "code":"SB"
                            },
                            {
                                "label":"Somalia",
                                "dial_code":"+252",
                                "code":"SO"
                            },
                            {
                                "label":"South Africa",
                                "dial_code":"+27",
                                "code":"ZA"
                            },
                            {
                                "label":"South Sudan",
                                "dial_code":"+211",
                                "code":"SS"
                            },
                            {
                                "label":"South Georgia and the South Sandwich Islands",
                                "dial_code":"+500",
                                "code":"GS"
                            },
                            {
                                "label":"Spain",
                                "dial_code":"+34",
                                "code":"ES"
                            },
                            {
                                "label":"Sri Lanka",
                                "dial_code":"+94",
                                "code":"LK"
                            },
                            {
                                "label":"Sudan",
                                "dial_code":"+249",
                                "code":"SD"
                            },
                            {
                                "label":"Suriname",
                                "dial_code":"+597",
                                "code":"SR"
                            },
                            {
                                "label":"Svalbard and Jan Mayen",
                                "dial_code":"+47",
                                "code":"SJ"
                            },
                            {
                                "label":"Swaziland",
                                "dial_code":"+268",
                                "code":"SZ"
                            },
                            {
                                "label":"Sweden",
                                "dial_code":"+46",
                                "code":"SE"
                            },
                            {
                                "label":"Switzerland",
                                "dial_code":"+41",
                                "code":"CH"
                            },
                            {
                                "label":"Syrian Arab Republic",
                                "dial_code":"+963",
                                "code":"SY"
                            },
                            {
                                "label":"Taiwan",
                                "dial_code":"+886",
                                "code":"TW"
                            },
                            {
                                "label":"Tajikistan",
                                "dial_code":"+992",
                                "code":"TJ"
                            },
                            {
                                "label":"Tanzania, United Republic of Tanzania",
                                "dial_code":"+255",
                                "code":"TZ"
                            },
                            {
                                "label":"Thailand",
                                "dial_code":"+66",
                                "code":"TH"
                            },
                            {
                                "label":"Timor-Leste",
                                "dial_code":"+670",
                                "code":"TL"
                            },
                            {
                                "label":"Togo",
                                "dial_code":"+228",
                                "code":"TG"
                            },
                            {
                                "label":"Tokelau",
                                "dial_code":"+690",
                                "code":"TK"
                            },
                            {
                                "label":"Tonga",
                                "dial_code":"+676",
                                "code":"TO"
                            },
                            {
                                "label":"Trinidad and Tobago",
                                "dial_code":"+1868",
                                "code":"TT"
                            },
                            {
                                "label":"Tunisia",
                                "dial_code":"+216",
                                "code":"TN"
                            },
                            {
                                "label":"Turkey",
                                "dial_code":"+90",
                                "code":"TR"
                            },
                            {
                                "label":"Turkmenistan",
                                "dial_code":"+993",
                                "code":"TM"
                            },
                            {
                                "label":"Turks and Caicos Islands",
                                "dial_code":"+1649",
                                "code":"TC"
                            },
                            {
                                "label":"Tuvalu",
                                "dial_code":"+688",
                                "code":"TV"
                            },
                            {
                                "label":"Uganda",
                                "dial_code":"+256",
                                "code":"UG"
                            },
                            {
                                "label":"Ukraine",
                                "dial_code":"+380",
                                "code":"UA"
                            },
                            {
                                "label":"United Arab Emirates",
                                "dial_code":"+971",
                                "code":"AE"
                            },
                            {
                                "label":"United Kingdom",
                                "dial_code":"+44",
                                "code":"GB"
                            },
                            {
                                "label":"United States",
                                "dial_code":"+1",
                                "code":"US"
                            },
                            {
                                "label":"Uruguay",
                                "dial_code":"+598",
                                "code":"UY"
                            },
                            {
                                "label":"Uzbekistan",
                                "dial_code":"+998",
                                "code":"UZ"
                            },
                            {
                                "label":"Vanuatu",
                                "dial_code":"+678",
                                "code":"VU"
                            },
                            {
                                "label":"Venezuela, Bolivarian Republic of Venezuela",
                                "dial_code":"+58",
                                "code":"VE"
                            },
                            {
                                "label":"Vietnam",
                                "dial_code":"+84",
                                "code":"VN"
                            },
                            {
                                "label":"Virgin Islands, British",
                                "dial_code":"+1284",
                                "code":"VG"
                            },
                            {
                                "label":"Virgin Islands, U.S.",
                                "dial_code":"+1340",
                                "code":"VI"
                            },
                            {
                                "label":"Wallis and Futuna",
                                "dial_code":"+681",
                                "code":"WF"
                            },
                            {
                                "label":"Yemen",
                                "dial_code":"+967",
                                "code":"YE"
                            },
                            {
                                "label":"Zambia",
                                "dial_code":"+260",
                                "code":"ZM"
                            },
                            {
                                "label":"Zimbabwe",
                                "dial_code":"+263",
                                "code":"ZW"
                            }
                        ]
            }
        },
        methods: {
            sendMessage: function() {
                //this.sendSMS()       
            },
            show: function() {
                this.$modal.show('countries')
            },
            selectCountry: function(country) {
                this.country = country
                this.$modal.hide('countries')
            },
            back: function() {
                this.$modal.hide('countries')  
            },
            sendSMS: function() {
                const self = this
                const phoneNumber = this.country.dial_code + this.phone
                const appVerifier = window.recaptchaVerifier
                firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                    .then(function (confirmationResult) {
                        window.confirmationResult = confirmationResult

                        if (!self.isLogin) {
                            const countryCode = [{
                                key: 'countryCode',
                                data: self.country.code
                            }]
                            
                            self.$store.commit('SET_REGISTER_INFORMATION', countryCode)
                        }

                        self.$router.push({ name: 'Verify' })
                    }).catch(function (error) {
                        switch (error.code) {
                            case 'auth/invalid-phone-number':
                                self.$alert('The format of the phone number provided is incorrect')
                                break;
                        }
                    })
            }
        },
        computed: {
            isLogin() {
                return this.$store.getters.IsLogin
            }
        },
        mounted() {
            const self = this

            window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('get-sign-in-code', 
            {
                size : 'invisible',
                callback: function() {
                    self.sendSMS()
                }
            })

            window.recaptchaVerifier.render().then(function(widgetId) {
                window.recaptchaWidgetId = widgetId
            })
        }
    }
</script>

<style>
.whats-your-number .row-img {
    padding-top: 5rem;
}

.whats-your-number .row-title {
    padding-top: 4rem;
}

.whats-your-number .title {
    font-weight: 800;
    font-size: 1.7rem;
}

.whats-your-number .info {
    font-weight: 400;
    font-size: 1.2rem;
}

.whats-your-number .col-number {
    width: 80%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #c2c7c7;
}

.whats-your-number .col-back {
    height: 45px;
    background-color: #66c9d8;
    color: white;
    padding-top: 1rem;
}

.whats-your-number .phone-number {
    width: 100%;
    height: 100%;
    color: #66c9d8;
    font-weight: 900;
    vertical-align: middle;
    border: none;
}

.whats-your-number .code {
    font-weight: 900;
    color: #66c9d8;
}

.whats-your-number .continue {
    width: 85%;
    min-height: 83px !important;
    background-color: #66c9d8;
    font-weight: 300;
    border-radius: 5px;
}
</style>