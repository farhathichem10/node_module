/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
var setData = require('@progress/kendo-angular-intl').setData;
setData({
    name: "pl",
    identity: {
        language: "pl"
    },
    territory: "PL",
    numbers: {
        symbols: {
            decimal: ",",
            group: " ",
            list: ";",
            percentSign: "%",
            plusSign: "+",
            minusSign: "-",
            approximatelySign: "~",
            exponential: "E",
            superscriptingExponent: "×",
            perMille: "‰",
            infinity: "∞",
            nan: "NaN",
            timeSeparator: ":"
        },
        decimal: {
            patterns: [
                "n"
            ],
            groupSize: [
                3
            ]
        },
        scientific: {
            patterns: [
                "nEn"
            ],
            groupSize: []
        },
        percent: {
            patterns: [
                "n%"
            ],
            groupSize: [
                3
            ]
        },
        currency: {
            patterns: [
                "n $"
            ],
            groupSize: [
                3
            ],
            "unitPattern-count-one": "n $",
            "unitPattern-count-few": "n $",
            "unitPattern-count-many": "n $",
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "n $",
                "(n $)"
            ],
            groupSize: [
                3
            ]
        },
        currencies: {
            ADP: {
                displayName: "peseta andorska",
                "displayName-count-one": "peseta andorska",
                "displayName-count-few": "pesety andorskie",
                "displayName-count-many": "peset andorskich",
                "displayName-count-other": "peseta andorska",
                symbol: "ADP"
            },
            AED: {
                displayName: "dirham ZEA",
                "displayName-count-one": "dirham ZEA",
                "displayName-count-few": "dirhamy ZEA",
                "displayName-count-many": "dirhamów ZEA",
                "displayName-count-other": "dirhama ZEA",
                symbol: "AED"
            },
            AFA: {
                displayName: "afgani (1927–2002)",
                "displayName-count-one": "afgani (1927–2002)",
                "displayName-count-few": "afgani (1927–2002)",
                "displayName-count-many": "afgani (1927–2002)",
                "displayName-count-other": "afgani (1927–2002)",
                symbol: "AFA"
            },
            AFN: {
                displayName: "afgani afgańskie",
                "displayName-count-one": "afgani afgańskie",
                "displayName-count-few": "afgani afgańskie",
                "displayName-count-many": "afgani afgańskich",
                "displayName-count-other": "afgani afgańskiego",
                symbol: "AFN",
                "symbol-alt-narrow": "؋"
            },
            ALK: {
                displayName: "ALK",
                symbol: "ALK"
            },
            ALL: {
                displayName: "lek albański",
                "displayName-count-one": "lek albański",
                "displayName-count-few": "leki albańskie",
                "displayName-count-many": "leków albańskich",
                "displayName-count-other": "leka albańskiego",
                symbol: "ALL"
            },
            AMD: {
                displayName: "dram armeński",
                "displayName-count-one": "dram armeński",
                "displayName-count-few": "dramy armeńskie",
                "displayName-count-many": "dramów armeńskich",
                "displayName-count-other": "drama armeńskiego",
                symbol: "AMD",
                "symbol-alt-narrow": "֏"
            },
            ANG: {
                displayName: "gulden antylski",
                "displayName-count-one": "gulden antylski",
                "displayName-count-few": "guldeny antylskie",
                "displayName-count-many": "guldenów antylskich",
                "displayName-count-other": "guldena antylskiego",
                symbol: "ANG"
            },
            AOA: {
                displayName: "kwanza angolska",
                "displayName-count-one": "kwanza angolska",
                "displayName-count-few": "kwanzy angolskie",
                "displayName-count-many": "kwanz angolskich",
                "displayName-count-other": "kwanzy angolskiej",
                symbol: "AOA",
                "symbol-alt-narrow": "Kz"
            },
            AOK: {
                displayName: "kwanza angolańska (1977–1990)",
                "displayName-count-one": "kwanza angolańska (1977–1990)",
                "displayName-count-few": "kwanzy angolańskie (1977–1990)",
                "displayName-count-many": "kwanz angolańskich (1977–1990)",
                "displayName-count-other": "kwanza angolańska (1977–1990)",
                symbol: "AOK"
            },
            AON: {
                displayName: "nowa kwanza angolańska (1990–2000)",
                "displayName-count-one": "nowa kwanza angolańska (1990–2000)",
                "displayName-count-few": "nowe kwanzy angolańskie (1990–2000)",
                "displayName-count-many": "nowych kwanz angolańskich (1990–2000)",
                "displayName-count-other": "nowa kwanza angolańska (1990–2000)",
                symbol: "AON"
            },
            AOR: {
                displayName: "kwanza angolańska Reajustado (1995–1999)",
                "displayName-count-one": "kwanza angolańska Reajustado (1995–1999)",
                "displayName-count-few": "kwanzy angolańskie Reajustado (1995–1999)",
                "displayName-count-many": "kwanz angolańskich Reajustado (1995–1999)",
                "displayName-count-other": "kwanza angolańska Reajustado (1995–1999)",
                symbol: "AOR"
            },
            ARA: {
                displayName: "austral argentyński",
                symbol: "ARA"
            },
            ARL: {
                displayName: "ARL",
                symbol: "ARL"
            },
            ARM: {
                displayName: "ARM",
                symbol: "ARM"
            },
            ARP: {
                displayName: "peso argentyńskie (1983–1985)",
                symbol: "ARP"
            },
            ARS: {
                displayName: "peso argentyńskie",
                "displayName-count-one": "peso argentyńskie",
                "displayName-count-few": "pesos argentyńskie",
                "displayName-count-many": "pesos argentyńskich",
                "displayName-count-other": "peso argentyńskiego",
                symbol: "ARS",
                "symbol-alt-narrow": "$"
            },
            ATS: {
                displayName: "szyling austriacki",
                symbol: "ATS"
            },
            AUD: {
                displayName: "dolar australijski",
                "displayName-count-one": "dolar australijski",
                "displayName-count-few": "dolary australijskie",
                "displayName-count-many": "dolarów australijskich",
                "displayName-count-other": "dolara australijskiego",
                symbol: "AUD",
                "symbol-alt-narrow": "$"
            },
            AWG: {
                displayName: "florin arubański",
                "displayName-count-one": "florin arubański",
                "displayName-count-few": "floriny arubańskie",
                "displayName-count-many": "florinów arubańskich",
                "displayName-count-other": "florina arubańskiego",
                symbol: "AWG"
            },
            AZM: {
                displayName: "manat azerbejdżański",
                "displayName-count-one": "manat azerbejdżański",
                "displayName-count-few": "manat azerbejdżański",
                "displayName-count-many": "manat azerbejdżański",
                "displayName-count-other": "manat azerbejdżański",
                symbol: "AZM"
            },
            AZN: {
                displayName: "manat azerski",
                "displayName-count-one": "manat azerski",
                "displayName-count-few": "manaty azerskie",
                "displayName-count-many": "manatów azerskich",
                "displayName-count-other": "manata azerskiego",
                symbol: "AZN",
                "symbol-alt-narrow": "₼"
            },
            BAD: {
                displayName: "dinar Bośni i Hercegowiny",
                symbol: "BAD"
            },
            BAM: {
                displayName: "marka zamienna Bośni i Hercegowiny",
                "displayName-count-one": "marka zamienna Bośni i Hercegowiny",
                "displayName-count-few": "marki zamienne Bośni i Hercegowiny",
                "displayName-count-many": "marek zamiennych Bośni i Hercegowiny",
                "displayName-count-other": "marki zamiennej Bośni i Hercegowiny",
                symbol: "BAM",
                "symbol-alt-narrow": "KM"
            },
            BAN: {
                displayName: "BAN",
                symbol: "BAN"
            },
            BBD: {
                displayName: "dolar barbadoski",
                "displayName-count-one": "dolar barbadoski",
                "displayName-count-few": "dolary barbadoskie",
                "displayName-count-many": "dolarów barbadoskich",
                "displayName-count-other": "dolara barbadoskiego",
                symbol: "BBD",
                "symbol-alt-narrow": "$"
            },
            BDT: {
                displayName: "taka bengalska",
                "displayName-count-one": "taka bengalska",
                "displayName-count-few": "taka bengalskie",
                "displayName-count-many": "taka bengalskich",
                "displayName-count-other": "taka bengalskiej",
                symbol: "BDT",
                "symbol-alt-narrow": "৳"
            },
            BEC: {
                displayName: "frank belgijski (zamienny)",
                "displayName-count-one": "frank belgijski (wymienialny)",
                "displayName-count-few": "franki belgijskie (wymienialne)",
                "displayName-count-many": "franków belgijskich (wymienialnych)",
                "displayName-count-other": "frank belgijski (zamienny)",
                symbol: "BEC"
            },
            BEF: {
                displayName: "frank belgijski",
                symbol: "BEF"
            },
            BEL: {
                displayName: "frank belgijski (finansowy)",
                symbol: "BEL"
            },
            BGL: {
                displayName: "lew bułgarski wymienny",
                "displayName-count-one": "lew bułgarski wymienny",
                "displayName-count-few": "lewy bułgarskie wymienne",
                "displayName-count-many": "lewów bułgarskich wymiennych",
                "displayName-count-other": "lewa bułgarskiego wymiennego",
                symbol: "BGL"
            },
            BGM: {
                displayName: "lew bułgarski socjalistyczny",
                "displayName-count-one": "lew bułgarski socjalistyczny",
                "displayName-count-few": "lewy bułgarskie socjalistyczne",
                "displayName-count-many": "lewów bułgarskich socjalistycznych",
                "displayName-count-other": "lewa bułgarskiego socjalistycznego",
                symbol: "BGM"
            },
            BGN: {
                displayName: "lew bułgarski",
                "displayName-count-one": "lew bułgarski",
                "displayName-count-few": "lewy bułgarskie",
                "displayName-count-many": "lewów bułgarskich",
                "displayName-count-other": "lewa bułgarskiego",
                symbol: "BGN"
            },
            BGO: {
                displayName: "lew bułgarski (1879–1952)",
                "displayName-count-one": "lew bułgarski (1879–1952)",
                "displayName-count-few": "lewy bułgarskie (1879–1952)",
                "displayName-count-many": "lewów bułgarskich (1879–1952)",
                "displayName-count-other": "lewa bułgarskiego (1879–1952)",
                symbol: "BGO"
            },
            BHD: {
                displayName: "dinar bahrański",
                "displayName-count-one": "dinar bahrański",
                "displayName-count-few": "dinary bahrańskie",
                "displayName-count-many": "dinarów bahrańskich",
                "displayName-count-other": "dinara bahrańskiego",
                symbol: "BHD"
            },
            BIF: {
                displayName: "frank burundyjski",
                "displayName-count-one": "frank burundyjski",
                "displayName-count-few": "franki burundyjskie",
                "displayName-count-many": "franków burundyjskich",
                "displayName-count-other": "franka burundyjskiego",
                symbol: "BIF"
            },
            BMD: {
                displayName: "dolar bermudzki",
                "displayName-count-one": "dolar bermudzki",
                "displayName-count-few": "dolary bermudzkie",
                "displayName-count-many": "dolarów bermudzkich",
                "displayName-count-other": "dolara bermudzkiego",
                symbol: "BMD",
                "symbol-alt-narrow": "$"
            },
            BND: {
                displayName: "dolar brunejski",
                "displayName-count-one": "dolar brunejski",
                "displayName-count-few": "dolary brunejskie",
                "displayName-count-many": "dolarów brunejskich",
                "displayName-count-other": "dolara brunejskiego",
                symbol: "BND",
                "symbol-alt-narrow": "$"
            },
            BOB: {
                displayName: "boliviano boliwijskie",
                "displayName-count-one": "boliviano boliwijskie",
                "displayName-count-few": "boliviano boliwijskie",
                "displayName-count-many": "boliviano boliwijskich",
                "displayName-count-other": "boliviano boliwijskiego",
                symbol: "BOB",
                "symbol-alt-narrow": "Bs"
            },
            BOL: {
                displayName: "BOL",
                symbol: "BOL"
            },
            BOP: {
                displayName: "peso boliwijskie",
                symbol: "BOP"
            },
            BOV: {
                displayName: "mvdol boliwijski",
                symbol: "BOV"
            },
            BRB: {
                displayName: "cruzeiro novo brazylijskie (1967–1986)",
                symbol: "BRB"
            },
            BRC: {
                displayName: "cruzado brazylijskie",
                symbol: "BRC"
            },
            BRE: {
                displayName: "cruzeiro brazylijskie (1990–1993)",
                symbol: "BRE"
            },
            BRL: {
                displayName: "real brazylijski",
                "displayName-count-one": "real brazylijski",
                "displayName-count-few": "reale brazylijskie",
                "displayName-count-many": "reali brazylijskich",
                "displayName-count-other": "reala brazylijskiego",
                symbol: "R$",
                "symbol-alt-narrow": "R$"
            },
            BRN: {
                displayName: "nowe cruzado brazylijskie",
                symbol: "BRN"
            },
            BRR: {
                displayName: "cruzeiro brazylijskie",
                symbol: "BRR"
            },
            BRZ: {
                displayName: "BRZ",
                symbol: "BRZ"
            },
            BSD: {
                displayName: "dolar bahamski",
                "displayName-count-one": "dolar bahamski",
                "displayName-count-few": "dolary bahamskie",
                "displayName-count-many": "dolarów bahamskich",
                "displayName-count-other": "dolara bahamskiego",
                symbol: "BSD",
                "symbol-alt-narrow": "$"
            },
            BTN: {
                displayName: "ngultrum bhutański",
                "displayName-count-one": "ngultrum bhutański",
                "displayName-count-few": "ngultrum bhutańskie",
                "displayName-count-many": "ngultrum bhutańskich",
                "displayName-count-other": "ngultrum bhutańskiego",
                symbol: "BTN"
            },
            BUK: {
                displayName: "kyat birmański",
                symbol: "BUK"
            },
            BWP: {
                displayName: "pula botswańska",
                "displayName-count-one": "pula botswańska",
                "displayName-count-few": "pule botswańskie",
                "displayName-count-many": "pul botswańskich",
                "displayName-count-other": "puli botswańskiej",
                symbol: "BWP",
                "symbol-alt-narrow": "P"
            },
            BYB: {
                displayName: "rubel białoruski (1994–1999)",
                symbol: "BYB"
            },
            BYN: {
                displayName: "rubel białoruski",
                "displayName-count-one": "rubel białoruski",
                "displayName-count-few": "ruble białoruskie",
                "displayName-count-many": "rubli białoruskich",
                "displayName-count-other": "rubla białoruskiego",
                symbol: "BYN"
            },
            BYR: {
                displayName: "rubel białoruski (2000–2016)",
                "displayName-count-one": "rubel białoruski (2000–2016)",
                "displayName-count-few": "ruble białoruskie (2000–2016)",
                "displayName-count-many": "rubli białoruskich (2000–2016)",
                "displayName-count-other": "rubla białoruskiego (2000–2016)",
                symbol: "BYR"
            },
            BZD: {
                displayName: "dolar belizeński",
                "displayName-count-one": "dolar belizeński",
                "displayName-count-few": "dolary belizeńskie",
                "displayName-count-many": "dolarów belizeńskich",
                "displayName-count-other": "dolara belizeńskiego",
                symbol: "BZD",
                "symbol-alt-narrow": "$"
            },
            CAD: {
                displayName: "dolar kanadyjski",
                "displayName-count-one": "dolar kanadyjski",
                "displayName-count-few": "dolary kanadyjskie",
                "displayName-count-many": "dolarów kanadyjskich",
                "displayName-count-other": "dolara kanadyjskiego",
                symbol: "CAD",
                "symbol-alt-narrow": "$"
            },
            CDF: {
                displayName: "frank kongijski",
                "displayName-count-one": "frank kongijski",
                "displayName-count-few": "franki kongijskie",
                "displayName-count-many": "franków kongijskich",
                "displayName-count-other": "franka kongijskiego",
                symbol: "CDF"
            },
            CHE: {
                displayName: "CHE",
                symbol: "CHE"
            },
            CHF: {
                displayName: "frank szwajcarski",
                "displayName-count-one": "frank szwajcarski",
                "displayName-count-few": "franki szwajcarskie",
                "displayName-count-many": "franków szwajcarskich",
                "displayName-count-other": "franka szwajcarskiego",
                symbol: "CHF"
            },
            CHW: {
                displayName: "CHW",
                symbol: "CHW"
            },
            CLE: {
                displayName: "CLE",
                symbol: "CLE"
            },
            CLF: {
                displayName: "CLF",
                symbol: "CLF"
            },
            CLP: {
                displayName: "peso chilijskie",
                "displayName-count-one": "peso chilijskie",
                "displayName-count-few": "pesos chilijskie",
                "displayName-count-many": "pesos chilijskich",
                "displayName-count-other": "peso chilijskiego",
                symbol: "CLP",
                "symbol-alt-narrow": "$"
            },
            CNH: {
                displayName: "juan chiński (rynek zewnętrzny)",
                "displayName-count-one": "juan chiński (rynek zewnętrzny)",
                "displayName-count-few": "juany chińskie (rynek zewnętrzny)",
                "displayName-count-many": "juanów chińskich (rynek zewnętrzny)",
                "displayName-count-other": "juana chińskiego (rynek zewnętrzny)",
                symbol: "CNH"
            },
            CNX: {
                displayName: "CNX",
                symbol: "CNX"
            },
            CNY: {
                displayName: "juan chiński",
                "displayName-count-one": "juan chiński",
                "displayName-count-few": "juany chińskie",
                "displayName-count-many": "juanów chińskich",
                "displayName-count-other": "juana chińskiego",
                symbol: "CNY",
                "symbol-alt-narrow": "¥"
            },
            COP: {
                displayName: "peso kolumbijskie",
                "displayName-count-one": "peso kolumbijskie",
                "displayName-count-few": "pesos kolumbijskie",
                "displayName-count-many": "pesos kolumbijskich",
                "displayName-count-other": "peso kolumbijskiego",
                symbol: "COP",
                "symbol-alt-narrow": "$"
            },
            COU: {
                displayName: "COU",
                symbol: "COU"
            },
            CRC: {
                displayName: "colon kostarykański",
                "displayName-count-one": "colon kostarykański",
                "displayName-count-few": "colony kostarykańskie",
                "displayName-count-many": "colonów kostarykańskich",
                "displayName-count-other": "colona kostarykańskiego",
                symbol: "CRC",
                "symbol-alt-narrow": "₡"
            },
            CSD: {
                displayName: "stary dinar serbski",
                symbol: "CSD"
            },
            CSK: {
                displayName: "korona czechosłowacka",
                "displayName-count-one": "korona czechosłowacka",
                "displayName-count-few": "korony czechosłowackie",
                "displayName-count-many": "koron czechosłowackich",
                "displayName-count-other": "korona czechosłowacka",
                symbol: "CSK"
            },
            CUC: {
                displayName: "peso kubańskie wymienialne",
                "displayName-count-one": "peso kubańskie wymienialne",
                "displayName-count-few": "pesos kubańskie wymienialne",
                "displayName-count-many": "pesos kubańskich wymienialnych",
                "displayName-count-other": "peso kubańskiego wymienialnego",
                symbol: "CUC",
                "symbol-alt-narrow": "$"
            },
            CUP: {
                displayName: "peso kubańskie",
                "displayName-count-one": "peso kubańskie",
                "displayName-count-few": "pesos kubańskie",
                "displayName-count-many": "pesos kubańskich",
                "displayName-count-other": "peso kubańskiego",
                symbol: "CUP",
                "symbol-alt-narrow": "$"
            },
            CVE: {
                displayName: "escudo zielonoprzylądkowe",
                "displayName-count-one": "escudo zielonoprzylądkowe",
                "displayName-count-few": "escudo zielonoprzylądkowe",
                "displayName-count-many": "escudo zielonoprzylądkowych",
                "displayName-count-other": "escudo zielonoprzylądkowego",
                symbol: "CVE"
            },
            CYP: {
                displayName: "funt cypryjski",
                symbol: "CYP"
            },
            CZK: {
                displayName: "korona czeska",
                "displayName-count-one": "korona czeska",
                "displayName-count-few": "korony czeskie",
                "displayName-count-many": "koron czeskich",
                "displayName-count-other": "korony czeskiej",
                symbol: "CZK",
                "symbol-alt-narrow": "Kč"
            },
            DDM: {
                displayName: "wschodnia marka wschodnioniemiecka",
                symbol: "DDM"
            },
            DEM: {
                displayName: "marka niemiecka",
                "displayName-count-one": "marka niemiecka",
                "displayName-count-few": "marki niemieckie",
                "displayName-count-many": "marek niemieckich",
                "displayName-count-other": "marka niemiecka",
                symbol: "DEM"
            },
            DJF: {
                displayName: "frank dżibutyjski",
                "displayName-count-one": "frank dżibutyjski",
                "displayName-count-few": "franki dżibutyjskie",
                "displayName-count-many": "franków dżibutyjskich",
                "displayName-count-other": "franka dżibutyjskiego",
                symbol: "DJF"
            },
            DKK: {
                displayName: "korona duńska",
                "displayName-count-one": "korona duńska",
                "displayName-count-few": "korony duńskie",
                "displayName-count-many": "koron duńskich",
                "displayName-count-other": "korony duńskiej",
                symbol: "DKK",
                "symbol-alt-narrow": "kr"
            },
            DOP: {
                displayName: "peso dominikańskie",
                "displayName-count-one": "peso dominikańskie",
                "displayName-count-few": "pesos dominikańskie",
                "displayName-count-many": "pesos dominikańskich",
                "displayName-count-other": "peso dominikańskiego",
                symbol: "DOP",
                "symbol-alt-narrow": "$"
            },
            DZD: {
                displayName: "dinar algierski",
                "displayName-count-one": "dinar algierski",
                "displayName-count-few": "dinary algierskie",
                "displayName-count-many": "dinarów algierskich",
                "displayName-count-other": "dinara algierskiego",
                symbol: "DZD"
            },
            ECS: {
                displayName: "sucre ekwadorski",
                symbol: "ECS"
            },
            ECV: {
                displayName: "ECV",
                symbol: "ECV"
            },
            EEK: {
                displayName: "korona estońska",
                "displayName-count-one": "korona estońska",
                "displayName-count-few": "korony estońskie",
                "displayName-count-many": "koron estońskich",
                "displayName-count-other": "korona estońska",
                symbol: "EEK"
            },
            EGP: {
                displayName: "funt egipski",
                "displayName-count-one": "funt egipski",
                "displayName-count-few": "funty egipskie",
                "displayName-count-many": "funtów egipskich",
                "displayName-count-other": "funta egipskiego",
                symbol: "EGP",
                "symbol-alt-narrow": "E£"
            },
            ERN: {
                displayName: "nakfa erytrejska",
                "displayName-count-one": "nakfa erytrejska",
                "displayName-count-few": "nakfy erytrejskie",
                "displayName-count-many": "nakf erytrejskich",
                "displayName-count-other": "nakfy erytrejskiej",
                symbol: "ERN"
            },
            ESA: {
                displayName: "peseta hiszpańska (Konto A)",
                symbol: "ESA"
            },
            ESB: {
                displayName: "peseta hiszpańska (konto wymienne)",
                "displayName-count-one": "peseta hiszpańska (konto wymienialne)",
                "displayName-count-few": "pesety hiszpańskie (konto wymienialne)",
                "displayName-count-many": "peset hiszpańskich (konto wymienialne)",
                "displayName-count-other": "peseta hiszpańska (konto wymienne)",
                symbol: "ESB"
            },
            ESP: {
                displayName: "peseta hiszpańska",
                symbol: "ESP",
                "symbol-alt-narrow": "₧"
            },
            ETB: {
                displayName: "birr etiopski",
                "displayName-count-one": "birr etiopski",
                "displayName-count-few": "birry etiopskie",
                "displayName-count-many": "birrów etiopskich",
                "displayName-count-other": "birra etiopskiego",
                symbol: "ETB"
            },
            EUR: {
                displayName: "euro",
                "displayName-count-one": "euro",
                "displayName-count-few": "euro",
                "displayName-count-many": "euro",
                "displayName-count-other": "euro",
                symbol: "€",
                "symbol-alt-narrow": "€"
            },
            FIM: {
                displayName: "marka fińska",
                symbol: "FIM"
            },
            FJD: {
                displayName: "dolar fidżyjski",
                "displayName-count-one": "dolar fidżyjski",
                "displayName-count-few": "dolary fidżyjskie",
                "displayName-count-many": "dolarów fidżyjskich",
                "displayName-count-other": "dolara fidżyjskiego",
                symbol: "FJD",
                "symbol-alt-narrow": "$"
            },
            FKP: {
                displayName: "funt falklandzki",
                "displayName-count-one": "funt falklandzki",
                "displayName-count-few": "funty falklandzkie",
                "displayName-count-many": "funtów falklandzkich",
                "displayName-count-other": "funta falklandzkiego",
                symbol: "FKP",
                "symbol-alt-narrow": "£"
            },
            FRF: {
                displayName: "frank francuski",
                "displayName-count-one": "frank francuski",
                "displayName-count-few": "franki francuskie",
                "displayName-count-many": "franków francuskich",
                "displayName-count-other": "frank francuski",
                symbol: "FRF"
            },
            GBP: {
                displayName: "funt szterling",
                "displayName-count-one": "funt szterling",
                "displayName-count-few": "funty szterlingi",
                "displayName-count-many": "funtów szterlingów",
                "displayName-count-other": "funta szterlinga",
                symbol: "GBP",
                "symbol-alt-narrow": "£"
            },
            GEK: {
                displayName: "kupon gruziński larit",
                symbol: "GEK"
            },
            GEL: {
                displayName: "lari gruzińskie",
                "displayName-count-one": "lari gruzińskie",
                "displayName-count-few": "lari gruzińskie",
                "displayName-count-many": "lari gruzińskich",
                "displayName-count-other": "lari gruzińskiego",
                symbol: "GEL",
                "symbol-alt-narrow": "₾"
            },
            GHC: {
                displayName: "cedi ghańskie (1979–2007)",
                symbol: "GHC"
            },
            GHS: {
                displayName: "cedi ghańskie",
                "displayName-count-one": "cedi ghańskie",
                "displayName-count-few": "cedi ghańskie",
                "displayName-count-many": "cedi ghańskich",
                "displayName-count-other": "cedi ghańskiego",
                symbol: "GHS",
                "symbol-alt-narrow": "GH₵"
            },
            GIP: {
                displayName: "funt gibraltarski",
                "displayName-count-one": "funt gibraltarski",
                "displayName-count-few": "funty gibraltarskie",
                "displayName-count-many": "funtów gibraltarskich",
                "displayName-count-other": "funta gibraltarskiego",
                symbol: "GIP",
                "symbol-alt-narrow": "£"
            },
            GMD: {
                displayName: "dalasi gambijskie",
                "displayName-count-one": "dalasi gambijskie",
                "displayName-count-few": "dalasi gambijskie",
                "displayName-count-many": "dalasi gambijskich",
                "displayName-count-other": "dalasi gambijskiego",
                symbol: "GMD"
            },
            GNF: {
                displayName: "frank gwinejski",
                "displayName-count-one": "frank gwinejski",
                "displayName-count-few": "franki gwinejskie",
                "displayName-count-many": "franków gwinejskich",
                "displayName-count-other": "franka gwinejskiego",
                symbol: "GNF",
                "symbol-alt-narrow": "FG"
            },
            GNS: {
                displayName: "syli gwinejskie",
                symbol: "GNS"
            },
            GQE: {
                displayName: "ekwele gwinejskie Gwinei Równikowej",
                symbol: "GQE"
            },
            GRD: {
                displayName: "drachma grecka",
                symbol: "GRD"
            },
            GTQ: {
                displayName: "quetzal gwatemalski",
                "displayName-count-one": "quetzal gwatemalski",
                "displayName-count-few": "quetzale gwatemalskie",
                "displayName-count-many": "quetzali gwatemalskich",
                "displayName-count-other": "quetzala gwatemalskiego",
                symbol: "GTQ",
                "symbol-alt-narrow": "Q"
            },
            GWE: {
                displayName: "escudo Gwinea Portugalska",
                symbol: "GWE"
            },
            GWP: {
                displayName: "peso Guinea-Bissau",
                symbol: "GWP"
            },
            GYD: {
                displayName: "dolar gujański",
                "displayName-count-one": "dolar gujański",
                "displayName-count-few": "dolary gujańskie",
                "displayName-count-many": "dolarów gujańskich",
                "displayName-count-other": "dolara gujańskiego",
                symbol: "GYD",
                "symbol-alt-narrow": "$"
            },
            HKD: {
                displayName: "dolar hongkoński",
                "displayName-count-one": "dolar hongkoński",
                "displayName-count-few": "dolary hongkońskie",
                "displayName-count-many": "dolarów hongkońskich",
                "displayName-count-other": "dolara hongkońskiego",
                symbol: "HKD",
                "symbol-alt-narrow": "$"
            },
            HNL: {
                displayName: "lempira honduraska",
                "displayName-count-one": "lempira honduraska",
                "displayName-count-few": "lempiry honduraskie",
                "displayName-count-many": "lempir honduraskich",
                "displayName-count-other": "lempiry honduraskiej",
                symbol: "HNL",
                "symbol-alt-narrow": "L"
            },
            HRD: {
                displayName: "dinar chorwacki",
                symbol: "HRD"
            },
            HRK: {
                displayName: "kuna chorwacka",
                "displayName-count-one": "kuna chorwacka",
                "displayName-count-few": "kuny chorwackie",
                "displayName-count-many": "kun chorwackich",
                "displayName-count-other": "kuny chorwackiej",
                symbol: "HRK",
                "symbol-alt-narrow": "kn"
            },
            HTG: {
                displayName: "gourde haitański",
                "displayName-count-one": "gourde haitański",
                "displayName-count-few": "gourde haitańskie",
                "displayName-count-many": "gourde haitańskich",
                "displayName-count-other": "gourde haitańskiego",
                symbol: "HTG"
            },
            HUF: {
                displayName: "forint węgierski",
                "displayName-count-one": "forint węgierski",
                "displayName-count-few": "forinty węgierskie",
                "displayName-count-many": "forintów węgierskich",
                "displayName-count-other": "forinta węgierskiego",
                symbol: "HUF",
                "symbol-alt-narrow": "Ft"
            },
            IDR: {
                displayName: "rupia indonezyjska",
                "displayName-count-one": "rupia indonezyjska",
                "displayName-count-few": "rupie indonezyjskie",
                "displayName-count-many": "rupii indonezyjskich",
                "displayName-count-other": "rupii indonezyjskiej",
                symbol: "IDR",
                "symbol-alt-narrow": "Rp"
            },
            IEP: {
                displayName: "funt irlandzki",
                symbol: "IEP"
            },
            ILP: {
                displayName: "funt izraelski",
                symbol: "ILP"
            },
            ILR: {
                displayName: "ILR",
                symbol: "ILR"
            },
            ILS: {
                displayName: "nowy szekel izraelski",
                "displayName-count-one": "nowy szekel izraelski",
                "displayName-count-few": "nowe szekle izraelskie",
                "displayName-count-many": "nowych szekli izraelskich",
                "displayName-count-other": "nowego szekla izraelskiego",
                symbol: "ILS",
                "symbol-alt-narrow": "₪"
            },
            INR: {
                displayName: "rupia indyjska",
                "displayName-count-one": "rupia indyjska",
                "displayName-count-few": "rupie indyjskie",
                "displayName-count-many": "rupii indyjskich",
                "displayName-count-other": "rupii indyjskiej",
                symbol: "INR",
                "symbol-alt-narrow": "₹"
            },
            IQD: {
                displayName: "dinar iracki",
                "displayName-count-one": "dinar iracki",
                "displayName-count-few": "dinary irackie",
                "displayName-count-many": "dinarów irackich",
                "displayName-count-other": "dinara irackiego",
                symbol: "IQD"
            },
            IRR: {
                displayName: "rial irański",
                "displayName-count-one": "rial irański",
                "displayName-count-few": "riale irańskie",
                "displayName-count-many": "riali irańskich",
                "displayName-count-other": "riala irańskiego",
                symbol: "IRR"
            },
            ISJ: {
                displayName: "ISJ",
                symbol: "ISJ"
            },
            ISK: {
                displayName: "korona islandzka",
                "displayName-count-one": "korona islandzka",
                "displayName-count-few": "korony islandzkie",
                "displayName-count-many": "koron islandzkich",
                "displayName-count-other": "korony islandzkiej",
                symbol: "ISK",
                "symbol-alt-narrow": "kr"
            },
            ITL: {
                displayName: "lir włoski",
                symbol: "ITL"
            },
            JMD: {
                displayName: "dolar jamajski",
                "displayName-count-one": "dolar jamajski",
                "displayName-count-few": "dolary jamajskie",
                "displayName-count-many": "dolarów jamajskich",
                "displayName-count-other": "dolara jamajskiego",
                symbol: "JMD",
                "symbol-alt-narrow": "$"
            },
            JOD: {
                displayName: "dinar jordański",
                "displayName-count-one": "dinar jordański",
                "displayName-count-few": "dinary jordańskie",
                "displayName-count-many": "dinarów jordańskich",
                "displayName-count-other": "dinara jordańskiego",
                symbol: "JOD"
            },
            JPY: {
                displayName: "jen japoński",
                "displayName-count-one": "jen japoński",
                "displayName-count-few": "jeny japońskie",
                "displayName-count-many": "jenów japońskich",
                "displayName-count-other": "jena japońskiego",
                symbol: "JPY",
                "symbol-alt-narrow": "¥"
            },
            KES: {
                displayName: "szyling kenijski",
                "displayName-count-one": "szyling kenijski",
                "displayName-count-few": "szylingi kenijskie",
                "displayName-count-many": "szylingów kenijskich",
                "displayName-count-other": "szylinga kenijskiego",
                symbol: "KES"
            },
            KGS: {
                displayName: "som kirgiski",
                "displayName-count-one": "som kirgiski",
                "displayName-count-few": "somy kirgiskie",
                "displayName-count-many": "somów kirgiskich",
                "displayName-count-other": "soma kirgiskiego",
                symbol: "KGS"
            },
            KHR: {
                displayName: "riel kambodżański",
                "displayName-count-one": "riel kambodżański",
                "displayName-count-few": "riele kambodżańskie",
                "displayName-count-many": "rieli kambodżańskich",
                "displayName-count-other": "riela kambodżańskiego",
                symbol: "KHR",
                "symbol-alt-narrow": "៛"
            },
            KMF: {
                displayName: "frank komoryjski",
                "displayName-count-one": "frank komoryjski",
                "displayName-count-few": "franki komoryjskie",
                "displayName-count-many": "franków komoryjskich",
                "displayName-count-other": "franka komoryjskiego",
                symbol: "KMF",
                "symbol-alt-narrow": "CF"
            },
            KPW: {
                displayName: "won północnokoreański",
                "displayName-count-one": "won północnokoreański",
                "displayName-count-few": "wony północnokoreańskie",
                "displayName-count-many": "wonów północnokoreańskich",
                "displayName-count-other": "wona północnokoreańskiego",
                symbol: "KPW",
                "symbol-alt-narrow": "₩"
            },
            KRH: {
                displayName: "KRH",
                symbol: "KRH"
            },
            KRO: {
                displayName: "KRO",
                symbol: "KRO"
            },
            KRW: {
                displayName: "won południowokoreański",
                "displayName-count-one": "won południowokoreański",
                "displayName-count-few": "wony południowokoreańskie",
                "displayName-count-many": "wonów południowokoreańskich",
                "displayName-count-other": "wona południowokoreańskiego",
                symbol: "KRW",
                "symbol-alt-narrow": "₩"
            },
            KWD: {
                displayName: "dinar kuwejcki",
                "displayName-count-one": "dinar kuwejcki",
                "displayName-count-few": "dinary kuwejckie",
                "displayName-count-many": "dinarów kuwejckich",
                "displayName-count-other": "dinara kuwejckiego",
                symbol: "KWD"
            },
            KYD: {
                displayName: "dolar kajmański",
                "displayName-count-one": "dolar kajmański",
                "displayName-count-few": "dolary kajmańskie",
                "displayName-count-many": "dolarów kajmańskich",
                "displayName-count-other": "dolara kajmańskiego",
                symbol: "KYD",
                "symbol-alt-narrow": "$"
            },
            KZT: {
                displayName: "tenge kazachskie",
                "displayName-count-one": "tenge kazachskie",
                "displayName-count-few": "tenge kazachskie",
                "displayName-count-many": "tenge kazachskich",
                "displayName-count-other": "tenge kazachskiego",
                symbol: "KZT",
                "symbol-alt-narrow": "₸"
            },
            LAK: {
                displayName: "kip laotański",
                "displayName-count-one": "kip laotański",
                "displayName-count-few": "kipy laotańskie",
                "displayName-count-many": "kipów laotańskich",
                "displayName-count-other": "kipa laotańskiego",
                symbol: "LAK",
                "symbol-alt-narrow": "₭"
            },
            LBP: {
                displayName: "funt libański",
                "displayName-count-one": "funt libański",
                "displayName-count-few": "funty libańskie",
                "displayName-count-many": "funtów libańskich",
                "displayName-count-other": "funta libańskiego",
                symbol: "LBP",
                "symbol-alt-narrow": "L£"
            },
            LKR: {
                displayName: "rupia lankijska",
                "displayName-count-one": "rupia lankijska",
                "displayName-count-few": "rupie lankijskie",
                "displayName-count-many": "rupii lankijskich",
                "displayName-count-other": "rupii lankijskiej",
                symbol: "LKR",
                "symbol-alt-narrow": "Rs"
            },
            LRD: {
                displayName: "dolar liberyjski",
                "displayName-count-one": "dolar liberyjski",
                "displayName-count-few": "dolary liberyjskie",
                "displayName-count-many": "dolarów liberyjskich",
                "displayName-count-other": "dolara liberyjskiego",
                symbol: "LRD",
                "symbol-alt-narrow": "$"
            },
            LSL: {
                displayName: "loti lesotyjskie",
                "displayName-count-one": "loti lesotyjskie",
                "displayName-count-few": "loti lesotyjskie",
                "displayName-count-many": "loti lesotyjskich",
                "displayName-count-other": "loti lesotyjskiego",
                symbol: "LSL"
            },
            LTL: {
                displayName: "lit litewski",
                "displayName-count-one": "lit litewski",
                "displayName-count-few": "lity litewskie",
                "displayName-count-many": "litów litewskich",
                "displayName-count-other": "lita litewskiego",
                symbol: "LTL",
                "symbol-alt-narrow": "Lt"
            },
            LTT: {
                displayName: "talon litewski",
                symbol: "LTT"
            },
            LUC: {
                displayName: "LUC",
                symbol: "LUC"
            },
            LUF: {
                displayName: "frank luksemburski",
                symbol: "LUF"
            },
            LUL: {
                displayName: "LUL",
                symbol: "LUL"
            },
            LVL: {
                displayName: "łat łotewski",
                "displayName-count-one": "łat łotewski",
                "displayName-count-few": "łaty łotewskie",
                "displayName-count-many": "łatów łotewskich",
                "displayName-count-other": "łata łotewskiego",
                symbol: "LVL",
                "symbol-alt-narrow": "Ls"
            },
            LVR: {
                displayName: "rubel łotewski",
                symbol: "LVR"
            },
            LYD: {
                displayName: "dinar libijski",
                "displayName-count-one": "dinar libijski",
                "displayName-count-few": "dinary libijskie",
                "displayName-count-many": "dinarów libijskich",
                "displayName-count-other": "dinara libijskiego",
                symbol: "LYD"
            },
            MAD: {
                displayName: "dirham marokański",
                "displayName-count-one": "dirham marokański",
                "displayName-count-few": "dirhamy marokańskie",
                "displayName-count-many": "dirhamów marokańskich",
                "displayName-count-other": "dirhama marokańskiego",
                symbol: "MAD"
            },
            MAF: {
                displayName: "frank marokański",
                "displayName-count-one": "frank marokański",
                "displayName-count-few": "franki marokańskie",
                "displayName-count-many": "franków marokańskich",
                "displayName-count-other": "frank marokański",
                symbol: "MAF"
            },
            MCF: {
                displayName: "MCF",
                symbol: "MCF"
            },
            MDC: {
                displayName: "MDC",
                symbol: "MDC"
            },
            MDL: {
                displayName: "lej mołdawski",
                "displayName-count-one": "lej mołdawski",
                "displayName-count-few": "leje mołdawskie",
                "displayName-count-many": "lejów mołdawskich",
                "displayName-count-other": "leja mołdawskiego",
                symbol: "MDL"
            },
            MGA: {
                displayName: "ariary malgaski",
                "displayName-count-one": "ariary malgaski",
                "displayName-count-few": "ariary malgaskie",
                "displayName-count-many": "ariary malgaskich",
                "displayName-count-other": "ariary malgaskiego",
                symbol: "MGA",
                "symbol-alt-narrow": "Ar"
            },
            MGF: {
                displayName: "frank malgaski",
                symbol: "MGF"
            },
            MKD: {
                displayName: "denar macedoński",
                "displayName-count-one": "denar macedoński",
                "displayName-count-few": "denary macedońskie",
                "displayName-count-many": "denarów macedońskich",
                "displayName-count-other": "denara macedońskiego",
                symbol: "MKD"
            },
            MKN: {
                displayName: "MKN",
                symbol: "MKN"
            },
            MLF: {
                displayName: "frank malijski",
                symbol: "MLF"
            },
            MMK: {
                displayName: "kiat birmański",
                "displayName-count-one": "kiat birmański",
                "displayName-count-few": "kiaty birmańskie",
                "displayName-count-many": "kiatów birmańskich",
                "displayName-count-other": "kiata birmańskiego",
                symbol: "MMK",
                "symbol-alt-narrow": "K"
            },
            MNT: {
                displayName: "tugrik mongolski",
                "displayName-count-one": "tugrik mongolski",
                "displayName-count-few": "tugriki mongolskie",
                "displayName-count-many": "tugrików mongolskich",
                "displayName-count-other": "tugrika mongolskiego",
                symbol: "MNT",
                "symbol-alt-narrow": "₮"
            },
            MOP: {
                displayName: "pataca Makau",
                "displayName-count-one": "pataca Makau",
                "displayName-count-few": "pataca Makau",
                "displayName-count-many": "pataca Makau",
                "displayName-count-other": "pataca Makau",
                symbol: "MOP"
            },
            MRO: {
                displayName: "ouguiya mauretańska (1973–2017)",
                "displayName-count-one": "ouguiya mauretańska (1973–2017)",
                "displayName-count-few": "ouguiya mauretańskie (1973–2017)",
                "displayName-count-many": "ouguiya mauretańskich (1973–2017)",
                "displayName-count-other": "ouguiya mauretańskiej (1973–2017)",
                symbol: "MRO"
            },
            MRU: {
                displayName: "ugija mauretańska",
                "displayName-count-one": "ugija mauretańska",
                "displayName-count-few": "ugija mauretańskie",
                "displayName-count-many": "ugija mauretańskich",
                "displayName-count-other": "ugija mauretańskiej",
                symbol: "MRU"
            },
            MTL: {
                displayName: "lira maltańska",
                symbol: "MTL"
            },
            MTP: {
                displayName: "funt maltański",
                symbol: "MTP"
            },
            MUR: {
                displayName: "rupia maurytyjska",
                "displayName-count-one": "rupia maurytyjska",
                "displayName-count-few": "rupie maurytyjskie",
                "displayName-count-many": "rupii maurytyjskich",
                "displayName-count-other": "rupii maurytyjskiej",
                symbol: "MUR",
                "symbol-alt-narrow": "Rs"
            },
            MVP: {
                displayName: "MVP",
                symbol: "MVP"
            },
            MVR: {
                displayName: "rupia malediwska",
                "displayName-count-one": "rupia malediwska",
                "displayName-count-few": "rupie malediwskie",
                "displayName-count-many": "rupii malediwskich",
                "displayName-count-other": "rupii malediwskiej",
                symbol: "MVR"
            },
            MWK: {
                displayName: "kwacha malawijska",
                "displayName-count-one": "kwacha malawijska",
                "displayName-count-few": "kwachy malawijskie",
                "displayName-count-many": "kwach malawijskich",
                "displayName-count-other": "kwachy malawijskiej",
                symbol: "MWK"
            },
            MXN: {
                displayName: "peso meksykańskie",
                "displayName-count-one": "peso meksykańskie",
                "displayName-count-few": "pesos meksykańskie",
                "displayName-count-many": "pesos meksykańskich",
                "displayName-count-other": "peso meksykańskiego",
                symbol: "MXN",
                "symbol-alt-narrow": "$"
            },
            MXP: {
                displayName: "peso srebrne meksykańskie (1861–1992)",
                symbol: "MXP"
            },
            MXV: {
                displayName: "MXV",
                symbol: "MXV"
            },
            MYR: {
                displayName: "ringgit malezyjski",
                "displayName-count-one": "ringgit malezyjski",
                "displayName-count-few": "ringgity malezyjskie",
                "displayName-count-many": "ringgitów malezyjskich",
                "displayName-count-other": "ringgita malezyjskiego",
                symbol: "MYR",
                "symbol-alt-narrow": "RM"
            },
            MZE: {
                displayName: "escudo mozambickie",
                symbol: "MZE"
            },
            MZM: {
                displayName: "metical Mozambik",
                symbol: "MZM"
            },
            MZN: {
                displayName: "metical mozambicki",
                "displayName-count-one": "metical mozambicki",
                "displayName-count-few": "meticale mozambickie",
                "displayName-count-many": "meticali mozambickich",
                "displayName-count-other": "meticala mozambickiego",
                symbol: "MZN"
            },
            NAD: {
                displayName: "dolar namibijski",
                "displayName-count-one": "dolar namibijski",
                "displayName-count-few": "dolary namibijskie",
                "displayName-count-many": "dolarów namibijskich",
                "displayName-count-other": "dolara namibijskiego",
                symbol: "NAD",
                "symbol-alt-narrow": "$"
            },
            NGN: {
                displayName: "naira nigeryjska",
                "displayName-count-one": "naira nigeryjska",
                "displayName-count-few": "nairy nigeryjskie",
                "displayName-count-many": "nair nigeryjskich",
                "displayName-count-other": "nairy nigeryjskiej",
                symbol: "NGN",
                "symbol-alt-narrow": "₦"
            },
            NIC: {
                displayName: "cordoba nikaraguańska (1988–1991)",
                "displayName-count-one": "cordoba nikaraguańska (1988–1991)",
                "displayName-count-few": "cordoby nikaraguańskie (1988–1991)",
                "displayName-count-many": "cordob nikaraguańskich (1988–1991)",
                "displayName-count-other": "cordoby nikaraguańskiej (1988–1991)",
                symbol: "NIC"
            },
            NIO: {
                displayName: "cordoba nikaraguańska",
                "displayName-count-one": "cordoba nikaraguańska",
                "displayName-count-few": "cordoby nikaraguańskie",
                "displayName-count-many": "cordob nikaraguańskich",
                "displayName-count-other": "cordoby nikaraguańskiej",
                symbol: "NIO",
                "symbol-alt-narrow": "C$"
            },
            NLG: {
                displayName: "gulden holenderski",
                symbol: "NLG"
            },
            NOK: {
                displayName: "korona norweska",
                "displayName-count-one": "korona norweska",
                "displayName-count-few": "korony norweskie",
                "displayName-count-many": "koron norweskich",
                "displayName-count-other": "korony norweskiej",
                symbol: "NOK",
                "symbol-alt-narrow": "kr"
            },
            NPR: {
                displayName: "rupia nepalska",
                "displayName-count-one": "rupia nepalska",
                "displayName-count-few": "rupie nepalskie",
                "displayName-count-many": "rupii nepalskich",
                "displayName-count-other": "rupii nepalskiej",
                symbol: "NPR",
                "symbol-alt-narrow": "Rs"
            },
            NZD: {
                displayName: "dolar nowozelandzki",
                "displayName-count-one": "dolar nowozelandzki",
                "displayName-count-few": "dolary nowozelandzkie",
                "displayName-count-many": "dolarów nowozelandzkich",
                "displayName-count-other": "dolara nowozelandzkiego",
                symbol: "NZD",
                "symbol-alt-narrow": "$"
            },
            OMR: {
                displayName: "rial omański",
                "displayName-count-one": "rial omański",
                "displayName-count-few": "riale omańskie",
                "displayName-count-many": "riali omańskich",
                "displayName-count-other": "riala omańskiego",
                symbol: "OMR"
            },
            PAB: {
                displayName: "balboa panamski",
                "displayName-count-one": "balboa panamski",
                "displayName-count-few": "balboa panamskie",
                "displayName-count-many": "balboa panamskich",
                "displayName-count-other": "balboa panamskiego",
                symbol: "PAB"
            },
            PEI: {
                displayName: "inti peruwiański",
                symbol: "PEI"
            },
            PEN: {
                displayName: "sol peruwiański",
                "displayName-count-one": "sol peruwiański",
                "displayName-count-few": "sole peruwiańskie",
                "displayName-count-many": "soli peruwiańskich",
                "displayName-count-other": "sola peruwiańskiego",
                symbol: "PEN"
            },
            PES: {
                displayName: "sol peruwiański (1863–1965)",
                "displayName-count-one": "sol peruwiański (1863–1965)",
                "displayName-count-few": "sole peruwiańskie (1863–1965)",
                "displayName-count-many": "soli peruwiańskich (1863–1965)",
                "displayName-count-other": "sola peruwiańskiego (1863–1965)",
                symbol: "PES"
            },
            PGK: {
                displayName: "kina papuańska",
                "displayName-count-one": "kina papuaska",
                "displayName-count-few": "kina papuaskie",
                "displayName-count-many": "kina papuaskich",
                "displayName-count-other": "kina papuaskiej",
                symbol: "PGK"
            },
            PHP: {
                displayName: "peso filipińskie",
                "displayName-count-one": "peso filipińskie",
                "displayName-count-few": "pesos filipińskie",
                "displayName-count-many": "pesos filipińskich",
                "displayName-count-other": "peso filipińskiego",
                symbol: "PHP",
                "symbol-alt-narrow": "₱"
            },
            PKR: {
                displayName: "rupia pakistańska",
                "displayName-count-one": "rupia pakistańska",
                "displayName-count-few": "rupie pakistańskie",
                "displayName-count-many": "rupii pakistańskich",
                "displayName-count-other": "rupii pakistańskiej",
                symbol: "PKR",
                "symbol-alt-narrow": "Rs"
            },
            PLN: {
                displayName: "złoty polski",
                "displayName-count-one": "złoty polski",
                "displayName-count-few": "złote polskie",
                "displayName-count-many": "złotych polskich",
                "displayName-count-other": "złotego polskiego",
                symbol: "zł",
                "symbol-alt-narrow": "zł"
            },
            PLZ: {
                displayName: "złoty polski (1950–1995)",
                "displayName-count-one": "złoty polski (1950–1995)",
                "displayName-count-few": "złote polskie (1950–1995)",
                "displayName-count-many": "złotych polskich (1950–1995)",
                "displayName-count-other": "złotego polskiego (1950–1995)",
                symbol: "PLZ"
            },
            PTE: {
                displayName: "escudo portugalskie",
                symbol: "PTE"
            },
            PYG: {
                displayName: "guarani paragwajskie",
                "displayName-count-one": "guarani paragwajskie",
                "displayName-count-few": "guarani paragwajskie",
                "displayName-count-many": "guarani paragwajskich",
                "displayName-count-other": "guarani paragwajskiego",
                symbol: "PYG",
                "symbol-alt-narrow": "₲"
            },
            QAR: {
                displayName: "rial katarski",
                "displayName-count-one": "rial katarski",
                "displayName-count-few": "riale katarskie",
                "displayName-count-many": "riali katarskich",
                "displayName-count-other": "riala katarskiego",
                symbol: "QAR"
            },
            RHD: {
                displayName: "dolar rodezyjski",
                symbol: "RHD"
            },
            ROL: {
                displayName: "lej rumuński (1952–2006)",
                "displayName-count-one": "lej rumuński (1952–2006)",
                "displayName-count-few": "lei rumuńskie (1952–2006)",
                "displayName-count-many": "lei rumuńskich (1952–2006)",
                "displayName-count-other": "leja rumuńskiego (1952–2006)",
                symbol: "ROL"
            },
            RON: {
                displayName: "lej rumuński",
                "displayName-count-one": "lej rumuński",
                "displayName-count-few": "leje rumuńskie",
                "displayName-count-many": "lejów rumuńskich",
                "displayName-count-other": "leja rumuńskiego",
                symbol: "RON",
                "symbol-alt-narrow": "lej"
            },
            RSD: {
                displayName: "dinar serbski",
                "displayName-count-one": "dinar serbski",
                "displayName-count-few": "dinary serbskie",
                "displayName-count-many": "dinarów serbskich",
                "displayName-count-other": "dinara serbskiego",
                symbol: "RSD"
            },
            RUB: {
                displayName: "rubel rosyjski",
                "displayName-count-one": "rubel rosyjski",
                "displayName-count-few": "ruble rosyjskie",
                "displayName-count-many": "rubli rosyjskich",
                "displayName-count-other": "rubla rosyjskiego",
                symbol: "RUB",
                "symbol-alt-narrow": "₽"
            },
            RUR: {
                displayName: "rubel rosyjski (1991–1998)",
                "displayName-count-one": "rubel rosyjski (1991–1998)",
                "displayName-count-few": "ruble rosyjskie (1991–1998)",
                "displayName-count-many": "rubli rosyjskich (1991–1998)",
                "displayName-count-other": "rubla rosyjskiego (1991–1998)",
                symbol: "RUR"
            },
            RWF: {
                displayName: "frank ruandyjski",
                "displayName-count-one": "frank ruandyjski",
                "displayName-count-few": "franki ruandyjskie",
                "displayName-count-many": "franków ruandyjskich",
                "displayName-count-other": "franka ruandyjskiego",
                symbol: "RWF",
                "symbol-alt-narrow": "RF"
            },
            SAR: {
                displayName: "rial saudyjski",
                "displayName-count-one": "rial saudyjski",
                "displayName-count-few": "riale saudyjskie",
                "displayName-count-many": "riali saudyjskich",
                "displayName-count-other": "riala saudyjskiego",
                symbol: "SAR"
            },
            SBD: {
                displayName: "dolar Wysp Salomona",
                "displayName-count-one": "dolar Wysp Salomona",
                "displayName-count-few": "dolary Wysp Salomona",
                "displayName-count-many": "dolarów Wysp Salomona",
                "displayName-count-other": "dolara Wysp Salomona",
                symbol: "SBD",
                "symbol-alt-narrow": "$"
            },
            SCR: {
                displayName: "rupia seszelska",
                "displayName-count-one": "rupia seszelska",
                "displayName-count-few": "rupie seszelskie",
                "displayName-count-many": "rupii seszelskich",
                "displayName-count-other": "rupii seszelskiej",
                symbol: "SCR"
            },
            SDD: {
                displayName: "dinar sudański",
                symbol: "SDD"
            },
            SDG: {
                displayName: "funt sudański",
                "displayName-count-one": "funt sudański",
                "displayName-count-few": "funty sudańskie",
                "displayName-count-many": "funtów sudańskich",
                "displayName-count-other": "funta sudańskiego",
                symbol: "SDG"
            },
            SDP: {
                displayName: "funt sudański (1957–1998)",
                "displayName-count-one": "funt sudański (1957–1998)",
                "displayName-count-few": "funty sudańskie (1957–1998)",
                "displayName-count-many": "funtów sudańskich (1957–1998)",
                "displayName-count-other": "funta sudańskiego (1957–1998)",
                symbol: "SDP"
            },
            SEK: {
                displayName: "korona szwedzka",
                "displayName-count-one": "korona szwedzka",
                "displayName-count-few": "korony szwedzkie",
                "displayName-count-many": "koron szwedzkich",
                "displayName-count-other": "korony szwedzkiej",
                symbol: "SEK",
                "symbol-alt-narrow": "kr"
            },
            SGD: {
                displayName: "dolar singapurski",
                "displayName-count-one": "dolar singapurski",
                "displayName-count-few": "dolary singapurskie",
                "displayName-count-many": "dolarów singapurskich",
                "displayName-count-other": "dolara singapurskiego",
                symbol: "SGD",
                "symbol-alt-narrow": "$"
            },
            SHP: {
                displayName: "funt Świętej Heleny",
                "displayName-count-one": "funt Świętej Heleny",
                "displayName-count-few": "funty Świętej Heleny",
                "displayName-count-many": "funtów Świętej Heleny",
                "displayName-count-other": "funta Świętej Heleny",
                symbol: "SHP",
                "symbol-alt-narrow": "£"
            },
            SIT: {
                displayName: "tolar słoweński",
                "displayName-count-one": "tolar słoweński",
                "displayName-count-few": "tolary słoweńskie",
                "displayName-count-many": "tolarów słoweńskich",
                "displayName-count-other": "tolar słoweński",
                symbol: "SIT"
            },
            SKK: {
                displayName: "korona słowacka",
                "displayName-count-one": "korona słowacka",
                "displayName-count-few": "korony słowackie",
                "displayName-count-many": "koron słowackich",
                "displayName-count-other": "korona słowacka",
                symbol: "SKK"
            },
            SLE: {
                displayName: "SLE",
                symbol: "SLE"
            },
            SLL: {
                displayName: "leone sierraleoński",
                "displayName-count-one": "leone sierraleoński",
                "displayName-count-few": "leone sierraleońskie",
                "displayName-count-many": "leone sierraleońskich",
                "displayName-count-other": "leone sierraleońskiego",
                symbol: "SLL"
            },
            SOS: {
                displayName: "szyling somalijski",
                "displayName-count-one": "szyling somalijski",
                "displayName-count-few": "szylingi somalijskie",
                "displayName-count-many": "szylingów somalijskich",
                "displayName-count-other": "szylinga somalijskiego",
                symbol: "SOS"
            },
            SRD: {
                displayName: "dolar surinamski",
                "displayName-count-one": "dolar surinamski",
                "displayName-count-few": "dolary surinamskie",
                "displayName-count-many": "dolarów surinamskich",
                "displayName-count-other": "dolara surinamskiego",
                symbol: "SRD",
                "symbol-alt-narrow": "$"
            },
            SRG: {
                displayName: "gulden surinamski",
                symbol: "SRG"
            },
            SSP: {
                displayName: "funt południowosudański",
                "displayName-count-one": "funt południowosudański",
                "displayName-count-few": "funty południowosudańskie",
                "displayName-count-many": "funtów południowosudańskich",
                "displayName-count-other": "funta południowosudańskiego",
                symbol: "SSP",
                "symbol-alt-narrow": "£"
            },
            STD: {
                displayName: "dobra Wysp Świętego Tomasza i Książęcej (1977–2017)",
                "displayName-count-one": "dobra Wysp Świętego Tomasza i Książęcej (1977–2017)",
                "displayName-count-few": "dobry Wysp Świętego Tomasza i Książęcej (1977–2017)",
                "displayName-count-many": "dobr Wysp Świętego Tomasza i Książęcej (1977–2017)",
                "displayName-count-other": "dobry Wysp Świętego Tomasza i Książęcej (1977–2017)",
                symbol: "STD"
            },
            STN: {
                displayName: "dobra Wysp Świętego Tomasza i Książęcej",
                "displayName-count-one": "dobra Wysp Świętego Tomasza i Książęcej",
                "displayName-count-few": "dobry Wysp Świętego Tomasza i Książęcej",
                "displayName-count-many": "dobr Wysp Świętego Tomasza i Książęcej",
                "displayName-count-other": "dobry Wysp Świętego Tomasza i Książęcej",
                symbol: "STN",
                "symbol-alt-narrow": "Db"
            },
            SUR: {
                displayName: "rubel radziecki",
                "displayName-count-one": "rubel radziecki",
                "displayName-count-few": "ruble radzieckie",
                "displayName-count-many": "rubli radzieckich",
                "displayName-count-other": "rubel radziecki",
                symbol: "SUR"
            },
            SVC: {
                displayName: "colon salwadorski",
                symbol: "SVC"
            },
            SYP: {
                displayName: "funt syryjski",
                "displayName-count-one": "funt syryjski",
                "displayName-count-few": "funty syryjskie",
                "displayName-count-many": "funtów syryjskich",
                "displayName-count-other": "funta syryjskiego",
                symbol: "SYP",
                "symbol-alt-narrow": "£"
            },
            SZL: {
                displayName: "lilangeni Suazi",
                "displayName-count-one": "lilangeni Suazi",
                "displayName-count-few": "emalangeni Suazi",
                "displayName-count-many": "emalangeni Suazi",
                "displayName-count-other": "emalangeni Suazi",
                symbol: "SZL"
            },
            THB: {
                displayName: "baht tajski",
                "displayName-count-one": "baht tajski",
                "displayName-count-few": "bahty tajskie",
                "displayName-count-many": "bahtów tajskich",
                "displayName-count-other": "bahta tajskiego",
                symbol: "THB",
                "symbol-alt-narrow": "฿"
            },
            TJR: {
                displayName: "rubel tadżycki",
                symbol: "TJR"
            },
            TJS: {
                displayName: "somoni tadżyckie",
                "displayName-count-one": "somoni tadżyckie",
                "displayName-count-few": "somoni tadżyckie",
                "displayName-count-many": "somoni tadżyckich",
                "displayName-count-other": "somoni tadżyckiego",
                symbol: "TJS"
            },
            TMM: {
                displayName: "manat turkmeński (1993–2009)",
                "displayName-count-one": "manat turkmeński (1993–2009)",
                "displayName-count-few": "manaty turkmeńskie (1993–2009)",
                "displayName-count-many": "manatów turkmeńskich (1993–2009)",
                "displayName-count-other": "manata turkmeńskiego (1993–2009)",
                symbol: "TMM"
            },
            TMT: {
                displayName: "manat turkmeński",
                "displayName-count-one": "manat turkmeński",
                "displayName-count-few": "manaty turkmeńskie",
                "displayName-count-many": "manatów turkmeńskich",
                "displayName-count-other": "manata turkmeńskiego",
                symbol: "TMT"
            },
            TND: {
                displayName: "dinar tunezyjski",
                "displayName-count-one": "dinar tunezyjski",
                "displayName-count-few": "dinary tunezyjskie",
                "displayName-count-many": "dinarów tunezyjskich",
                "displayName-count-other": "dinara tunezyjskiego",
                symbol: "TND"
            },
            TOP: {
                displayName: "pa’anga tongijska",
                "displayName-count-one": "pa’anga tongijska",
                "displayName-count-few": "pa’anga tongijskie",
                "displayName-count-many": "pa’anga tongijskich",
                "displayName-count-other": "pa’anga tongijskiej",
                symbol: "TOP",
                "symbol-alt-narrow": "T$"
            },
            TPE: {
                displayName: "escudo timorskie",
                symbol: "TPE"
            },
            TRL: {
                displayName: "lira turecka (1922–2005)",
                "displayName-count-one": "lira turecka (1922–2005)",
                "displayName-count-few": "liry tureckie (1922–2005)",
                "displayName-count-many": "lir tureckich (1922–2005)",
                "displayName-count-other": "liry tureckiej (1922–2005)",
                symbol: "TRL"
            },
            TRY: {
                displayName: "lira turecka",
                "displayName-count-one": "lira turecka",
                "displayName-count-few": "liry tureckie",
                "displayName-count-many": "lir tureckich",
                "displayName-count-other": "liry tureckiej",
                symbol: "TRY",
                "symbol-alt-narrow": "₺",
                "symbol-alt-variant": "TL"
            },
            TTD: {
                displayName: "dolar trynidadzki",
                "displayName-count-one": "dolar trynidadzki",
                "displayName-count-few": "dolary trynidadzkie",
                "displayName-count-many": "dolarów trynidadzkich",
                "displayName-count-other": "dolara trynidadzkiego",
                symbol: "TTD",
                "symbol-alt-narrow": "$"
            },
            TWD: {
                displayName: "nowy dolar tajwański",
                "displayName-count-one": "nowy dolar tajwański",
                "displayName-count-few": "nowe dolary tajwańskie",
                "displayName-count-many": "nowych dolarów tajwańskich",
                "displayName-count-other": "nowego dolara tajwańskiego",
                symbol: "TWD",
                "symbol-alt-narrow": "NT$"
            },
            TZS: {
                displayName: "szyling tanzański",
                "displayName-count-one": "szyling tanzański",
                "displayName-count-few": "szylingi tanzańskie",
                "displayName-count-many": "szylingów tanzańskich",
                "displayName-count-other": "szylinga tanzańskiego",
                symbol: "TZS"
            },
            UAH: {
                displayName: "hrywna ukraińska",
                "displayName-count-one": "hrywna ukraińska",
                "displayName-count-few": "hrywny ukraińskie",
                "displayName-count-many": "hrywien ukraińskich",
                "displayName-count-other": "hrywny ukraińskiej",
                symbol: "UAH",
                "symbol-alt-narrow": "₴"
            },
            UAK: {
                displayName: "karbowaniec ukraiński",
                "displayName-count-one": "karbowaniec ukraiński",
                "displayName-count-few": "karbowańce ukraińskie",
                "displayName-count-many": "karbowańców ukraińskich",
                "displayName-count-other": "karbowaniec ukraiński",
                symbol: "UAK"
            },
            UGS: {
                displayName: "szyling ugandyjski (1966–1987)",
                symbol: "UGS"
            },
            UGX: {
                displayName: "szyling ugandyjski",
                "displayName-count-one": "szyling ugandyjski",
                "displayName-count-few": "szylingi ugandyjskie",
                "displayName-count-many": "szylingów ugandyjskich",
                "displayName-count-other": "szylinga ugandyjskiego",
                symbol: "UGX"
            },
            USD: {
                displayName: "dolar amerykański",
                "displayName-count-one": "dolar amerykański",
                "displayName-count-few": "dolary amerykańskie",
                "displayName-count-many": "dolarów amerykańskich",
                "displayName-count-other": "dolara amerykańskiego",
                symbol: "USD",
                "symbol-alt-narrow": "$"
            },
            USN: {
                displayName: "USN",
                symbol: "USN"
            },
            USS: {
                displayName: "USS",
                symbol: "USS"
            },
            UYI: {
                displayName: "UYI",
                symbol: "UYI"
            },
            UYP: {
                displayName: "peso urugwajskie (1975–1993)",
                symbol: "UYP"
            },
            UYU: {
                displayName: "peso urugwajskie",
                "displayName-count-one": "peso urugwajskie",
                "displayName-count-few": "pesos urugwajskie",
                "displayName-count-many": "pesos urugwajskich",
                "displayName-count-other": "peso urugwajskiego",
                symbol: "UYU",
                "symbol-alt-narrow": "$"
            },
            UYW: {
                displayName: "UYW",
                symbol: "UYW"
            },
            UZS: {
                displayName: "som uzbecki",
                "displayName-count-one": "som uzbecki",
                "displayName-count-few": "somy uzbeckie",
                "displayName-count-many": "somów uzbeckich",
                "displayName-count-other": "soma uzbeckiego",
                symbol: "UZS"
            },
            VEB: {
                displayName: "boliwar wenezuelski (1871–2008)",
                "displayName-count-one": "boliwar wenezuelski (1871–2008)",
                "displayName-count-few": "boliwary wenezuelskie (1871–2008)",
                "displayName-count-many": "boliwarów wenezuelskich (1871–2008)",
                "displayName-count-other": "boliwary wenezuelskiego (1871–2008)",
                symbol: "VEB"
            },
            VED: {
                displayName: "VED",
                symbol: "VED"
            },
            VEF: {
                displayName: "boliwar wenezuelski (2008–2018)",
                "displayName-count-one": "boliwar wenezuelski (2008–2018)",
                "displayName-count-few": "boliwary wenezuelskie (2008–2018)",
                "displayName-count-many": "boliwarów wenezuelskich (2008–2018)",
                "displayName-count-other": "boliwara wenezuelskiego (2008–2018)",
                symbol: "VEF",
                "symbol-alt-narrow": "Bs"
            },
            VES: {
                displayName: "boliwar wenezuelski",
                "displayName-count-one": "boliwar wenezuelski",
                "displayName-count-few": "boliwary wenezuelskie",
                "displayName-count-many": "boliwarów wenezuelskich",
                "displayName-count-other": "boliwara wenezuelskiego",
                symbol: "VES"
            },
            VND: {
                displayName: "dong wietnamski",
                "displayName-count-one": "dong wietnamski",
                "displayName-count-few": "dongi wietnamskie",
                "displayName-count-many": "dongów wietnamskich",
                "displayName-count-other": "donga wietnamskiego",
                symbol: "VND",
                "symbol-alt-narrow": "₫"
            },
            VNN: {
                displayName: "VNN",
                symbol: "VNN"
            },
            VUV: {
                displayName: "vatu wanuackie",
                "displayName-count-one": "vatu wanuackie",
                "displayName-count-few": "vatu wanuackie",
                "displayName-count-many": "vatu wanuackich",
                "displayName-count-other": "vatu wanuackiego",
                symbol: "VUV"
            },
            WST: {
                displayName: "tala samoańskie",
                "displayName-count-one": "tala samoańskie",
                "displayName-count-few": "tala samoańskie",
                "displayName-count-many": "tala samoańskich",
                "displayName-count-other": "tala samoańskiego",
                symbol: "WST"
            },
            XAF: {
                displayName: "frank CFA BEAC",
                "displayName-count-one": "frank CFA BEAC",
                "displayName-count-few": "franki CFA BEAC",
                "displayName-count-many": "franków CFA BEAC",
                "displayName-count-other": "franka CFA BEAC",
                symbol: "FCFA"
            },
            XAG: {
                displayName: "srebro",
                symbol: "XAG"
            },
            XAU: {
                displayName: "złoto",
                symbol: "XAU"
            },
            XBA: {
                displayName: "XBA",
                symbol: "XBA"
            },
            XBB: {
                displayName: "XBB",
                symbol: "XBB"
            },
            XBC: {
                displayName: "europejska jednostka rozrachunkowa (XBC)",
                symbol: "XBC"
            },
            XBD: {
                displayName: "europejska jednostka rozrachunkowa (XBD)",
                symbol: "XBD"
            },
            XCD: {
                displayName: "dolar wschodniokaraibski",
                "displayName-count-one": "dolar wschodniokaraibski",
                "displayName-count-few": "dolary wschodniokaraibskie",
                "displayName-count-many": "dolarów wschodniokaraibskich",
                "displayName-count-other": "dolara wschodniokaraibskiego",
                symbol: "EC$",
                "symbol-alt-narrow": "$"
            },
            XDR: {
                displayName: "specjalne prawa ciągnienia",
                symbol: "XDR"
            },
            XEU: {
                displayName: "ECU",
                symbol: "XEU"
            },
            XFO: {
                displayName: "frank złoty francuski",
                symbol: "XFO"
            },
            XFU: {
                displayName: "UIC-frank francuski",
                symbol: "XFU"
            },
            XOF: {
                displayName: "frank CFA",
                "displayName-count-one": "frank CFA",
                "displayName-count-few": "franki CFA",
                "displayName-count-many": "franków CFA",
                "displayName-count-other": "franka CFA",
                symbol: "F CFA"
            },
            XPD: {
                displayName: "pallad",
                symbol: "XPD"
            },
            XPF: {
                displayName: "frank CFP",
                "displayName-count-one": "frank CFP",
                "displayName-count-few": "franki CFP",
                "displayName-count-many": "franków CFP",
                "displayName-count-other": "franka CFP",
                symbol: "CFPF"
            },
            XPT: {
                displayName: "platyna",
                symbol: "XPT"
            },
            XRE: {
                displayName: "XRE",
                symbol: "XRE"
            },
            XSU: {
                displayName: "XSU",
                symbol: "XSU"
            },
            XTS: {
                displayName: "testowy kod waluty",
                symbol: "XTS"
            },
            XUA: {
                displayName: "XUA",
                symbol: "XUA"
            },
            XXX: {
                displayName: "nieznana waluta",
                "displayName-count-one": "(nieznana waluta)",
                "displayName-count-few": "(nieznana waluta)",
                "displayName-count-many": "(nieznana waluta)",
                "displayName-count-other": "(nieznana waluta)",
                symbol: "¤"
            },
            YDD: {
                displayName: "dinar jemeński",
                symbol: "YDD"
            },
            YER: {
                displayName: "rial jemeński",
                "displayName-count-one": "rial jemeński",
                "displayName-count-few": "riale jemeńskie",
                "displayName-count-many": "riali jemeńskich",
                "displayName-count-other": "riala jemeńskiego",
                symbol: "YER"
            },
            YUD: {
                displayName: "YUD",
                symbol: "YUD"
            },
            YUM: {
                displayName: "nowy dinar jugosławiański",
                symbol: "YUM"
            },
            YUN: {
                displayName: "dinar jugosławiański wymienny",
                symbol: "YUN"
            },
            YUR: {
                displayName: "YUR",
                symbol: "YUR"
            },
            ZAL: {
                displayName: "rand południowoafrykański (finansowy)",
                symbol: "ZAL"
            },
            ZAR: {
                displayName: "rand południowoafrykański",
                "displayName-count-one": "rand południowoafrykański",
                "displayName-count-few": "randy południowoafrykańskie",
                "displayName-count-many": "randów południowoafrykańskich",
                "displayName-count-other": "randa południowoafrykańskiego",
                symbol: "ZAR",
                "symbol-alt-narrow": "R"
            },
            ZMK: {
                displayName: "kwacha zambijska (1968–2012)",
                "displayName-count-one": "kwacha zambijska (1968–2012)",
                "displayName-count-few": "kwacha zambijskie (1968–2012)",
                "displayName-count-many": "kwacha zambijskich (1968–2012)",
                "displayName-count-other": "kwacha zambijskiej (1968–2012)",
                symbol: "ZMK"
            },
            ZMW: {
                displayName: "kwacha zambijska",
                "displayName-count-one": "kwacha zambijska",
                "displayName-count-few": "kwachy zambijskie",
                "displayName-count-many": "kwach zambijskich",
                "displayName-count-other": "kwachy zambijskiej",
                symbol: "ZMW",
                "symbol-alt-narrow": "ZK"
            },
            ZRN: {
                displayName: "nowy zair zairski",
                symbol: "ZRN"
            },
            ZRZ: {
                displayName: "zair zairski",
                symbol: "ZRZ"
            },
            ZWD: {
                displayName: "dolar Zimbabwe (1980–2008)",
                symbol: "ZWD"
            },
            ZWL: {
                displayName: "dolar Zimbabwe (2009)",
                symbol: "ZWL"
            },
            ZWR: {
                displayName: "dolar Zimbabwe (2008)",
                symbol: "ZWR"
            }
        },
        localeCurrency: "PLN"
    },
    calendar: {
        patterns: {
            d: "d.MM.y",
            D: "EEEE, d MMMM y",
            m: "d MMM",
            M: "d MMMM",
            y: "LLL y",
            Y: "LLLL y",
            F: "EEEE, d MMMM y HH:mm:ss",
            g: "d.MM.y HH:mm",
            G: "d.MM.y HH:mm:ss",
            t: "HH:mm",
            T: "HH:mm:ss",
            s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
            u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
        },
        dateTimeFormats: {
            full: "{1} {0}",
            long: "{1} {0}",
            medium: "{1}, {0}",
            short: "{1}, {0}",
            availableFormats: {
                Bh: "h B",
                Bhm: "h:mm B",
                Bhms: "h:mm:ss B",
                d: "d",
                E: "ccc",
                EBhm: "E h:mm B",
                EBhms: "E h:mm:ss B",
                Ed: "E, d",
                Ehm: "E, h:mm a",
                EHm: "E, HH:mm",
                Ehms: "E, h:mm:ss a",
                EHms: "E, HH:mm:ss",
                Gy: "y G",
                GyMd: "d.MM.y GGGGG",
                GyMMM: "MMM y G",
                GyMMMd: "d MMM y G",
                GyMMMEd: "E, d MMM y G",
                GyMMMM: "LLLL y G",
                GyMMMMd: "d MMMM y G",
                GyMMMMEd: "E, d MMMM y G",
                h: "h a",
                H: "HH",
                hm: "h:mm a",
                Hm: "HH:mm",
                hms: "h:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "HH:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "HH:mm v",
                M: "L",
                Md: "d.MM",
                MEd: "E, d.MM",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "E, d MMM",
                MMMMd: "d MMMM",
                MMMMEd: "E, d MMMM",
                "MMMMW-count-one": "LLLL, 'tydz'. W",
                "MMMMW-count-few": "LLLL, 'tydz'. W",
                "MMMMW-count-many": "LLLL, 'tydz'. W",
                "MMMMW-count-other": "LLLL, 'tydz'. W",
                ms: "mm:ss",
                y: "y",
                yM: "MM.y",
                yMd: "d.MM.y",
                yMEd: "E, d.MM.y",
                yMMM: "LLL y",
                yMMMd: "d MMM y",
                yMMMEd: "E, d MMM y",
                yMMMM: "LLLL y",
                yMMMMd: "d MMMM y",
                yMMMMEd: "E, d MMMM y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y",
                "yw-count-one": "Y, 'tydz'. w",
                "yw-count-few": "Y, 'tydz'. w",
                "yw-count-many": "Y, 'tydz'. w",
                "yw-count-other": "Y, 'tydz'. w"
            }
        },
        timeFormats: {
            full: "HH:mm:ss zzzz",
            long: "HH:mm:ss z",
            medium: "HH:mm:ss",
            short: "HH:mm"
        },
        dateFormats: {
            full: "EEEE, d MMMM y",
            long: "d MMMM y",
            medium: "d MMM y",
            short: "d.MM.y"
        },
        days: {
            format: {
                abbreviated: [
                    "niedz.",
                    "pon.",
                    "wt.",
                    "śr.",
                    "czw.",
                    "pt.",
                    "sob."
                ],
                narrow: [
                    "n",
                    "p",
                    "w",
                    "ś",
                    "c",
                    "p",
                    "s"
                ],
                short: [
                    "nie",
                    "pon",
                    "wto",
                    "śro",
                    "czw",
                    "pią",
                    "sob"
                ],
                wide: [
                    "niedziela",
                    "poniedziałek",
                    "wtorek",
                    "środa",
                    "czwartek",
                    "piątek",
                    "sobota"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "niedz.",
                    "pon.",
                    "wt.",
                    "śr.",
                    "czw.",
                    "pt.",
                    "sob."
                ],
                narrow: [
                    "N",
                    "P",
                    "W",
                    "Ś",
                    "C",
                    "P",
                    "S"
                ],
                short: [
                    "nie",
                    "pon",
                    "wto",
                    "śro",
                    "czw",
                    "pią",
                    "sob"
                ],
                wide: [
                    "niedziela",
                    "poniedziałek",
                    "wtorek",
                    "środa",
                    "czwartek",
                    "piątek",
                    "sobota"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "sty",
                    "lut",
                    "mar",
                    "kwi",
                    "maj",
                    "cze",
                    "lip",
                    "sie",
                    "wrz",
                    "paź",
                    "lis",
                    "gru"
                ],
                narrow: [
                    "s",
                    "l",
                    "m",
                    "k",
                    "m",
                    "c",
                    "l",
                    "s",
                    "w",
                    "p",
                    "l",
                    "g"
                ],
                wide: [
                    "stycznia",
                    "lutego",
                    "marca",
                    "kwietnia",
                    "maja",
                    "czerwca",
                    "lipca",
                    "sierpnia",
                    "września",
                    "października",
                    "listopada",
                    "grudnia"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "sty",
                    "lut",
                    "mar",
                    "kwi",
                    "maj",
                    "cze",
                    "lip",
                    "sie",
                    "wrz",
                    "paź",
                    "lis",
                    "gru"
                ],
                narrow: [
                    "S",
                    "L",
                    "M",
                    "K",
                    "M",
                    "C",
                    "L",
                    "S",
                    "W",
                    "P",
                    "L",
                    "G"
                ],
                wide: [
                    "styczeń",
                    "luty",
                    "marzec",
                    "kwiecień",
                    "maj",
                    "czerwiec",
                    "lipiec",
                    "sierpień",
                    "wrzesień",
                    "październik",
                    "listopad",
                    "grudzień"
                ]
            }
        },
        quarters: {
            format: {
                abbreviated: [
                    "I kw.",
                    "II kw.",
                    "III kw.",
                    "IV kw."
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "I kwartał",
                    "II kwartał",
                    "III kwartał",
                    "IV kwartał"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "I kw.",
                    "II kw.",
                    "III kw.",
                    "IV kw."
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "I kwartał",
                    "II kwartał",
                    "III kwartał",
                    "IV kwartał"
                ]
            }
        },
        dayPeriods: {
            format: {
                abbreviated: {
                    midnight: "o północy",
                    am: "AM",
                    noon: "w południe",
                    pm: "PM",
                    morning1: "rano",
                    morning2: "przed południem",
                    afternoon1: "po południu",
                    evening1: "wieczorem",
                    night1: "w nocy"
                },
                narrow: {
                    midnight: "o półn.",
                    am: "a",
                    noon: "w poł.",
                    pm: "p",
                    morning1: "rano",
                    morning2: "przed poł.",
                    afternoon1: "po poł.",
                    evening1: "wiecz.",
                    night1: "w nocy"
                },
                wide: {
                    midnight: "o północy",
                    am: "AM",
                    noon: "w południe",
                    pm: "PM",
                    morning1: "rano",
                    morning2: "przed południem",
                    afternoon1: "po południu",
                    evening1: "wieczorem",
                    night1: "w nocy"
                }
            },
            "stand-alone": {
                abbreviated: {
                    midnight: "północ",
                    am: "AM",
                    noon: "południe",
                    pm: "PM",
                    morning1: "rano",
                    morning2: "przedpołudnie",
                    afternoon1: "popołudnie",
                    evening1: "wieczór",
                    night1: "noc"
                },
                narrow: {
                    midnight: "półn.",
                    am: "a",
                    noon: "poł.",
                    pm: "p",
                    morning1: "rano",
                    morning2: "przedpoł.",
                    afternoon1: "popoł.",
                    evening1: "wiecz.",
                    night1: "noc"
                },
                wide: {
                    midnight: "północ",
                    am: "AM",
                    noon: "południe",
                    pm: "PM",
                    morning1: "rano",
                    morning2: "przedpołudnie",
                    afternoon1: "popołudnie",
                    evening1: "wieczór",
                    night1: "noc"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    "0": "przed naszą erą",
                    "1": "naszej ery",
                    "0-alt-variant": "p.n.e.",
                    "1-alt-variant": "n.e."
                },
                abbreviated: {
                    "0": "p.n.e.",
                    "1": "n.e.",
                    "0-alt-variant": "BCE",
                    "1-alt-variant": "CE"
                },
                narrow: {
                    "0": "p.n.e.",
                    "1": "n.e.",
                    "0-alt-variant": "BCE",
                    "1-alt-variant": "CE"
                }
            }
        },
        gmtFormat: "GMT{0}",
        gmtZeroFormat: "GMT",
        dateFields: {
            era: {
                wide: "era",
                short: "era",
                narrow: "era"
            },
            year: {
                wide: "rok",
                short: "r.",
                narrow: "r."
            },
            quarter: {
                wide: "kwartał",
                short: "kw.",
                narrow: "kw."
            },
            month: {
                wide: "miesiąc",
                short: "mies.",
                narrow: "mc"
            },
            week: {
                wide: "tydzień",
                short: "tydz.",
                narrow: "tydz."
            },
            weekOfMonth: {
                wide: "tydzień miesiąca",
                short: "tydz. mies.",
                narrow: "tydz. mies."
            },
            day: {
                wide: "dzień",
                short: "dz.",
                narrow: "d."
            },
            dayOfYear: {
                wide: "dzień roku",
                short: "dz. roku",
                narrow: "dz. r."
            },
            weekday: {
                wide: "dzień tygodnia",
                short: "dzień tyg.",
                narrow: "dz. tyg."
            },
            weekdayOfMonth: {
                wide: "dzień miesiąca",
                short: "dzień mies.",
                narrow: "dz. mies."
            },
            dayperiod: {
                short: "rano / po południu / wieczorem",
                wide: "rano / po południu / wieczorem",
                narrow: "rano / po poł. / wiecz."
            },
            hour: {
                wide: "godzina",
                short: "godz.",
                narrow: "g."
            },
            minute: {
                wide: "minuta",
                short: "min",
                narrow: "min"
            },
            second: {
                wide: "sekunda",
                short: "sek.",
                narrow: "s"
            },
            zone: {
                wide: "strefa czasowa",
                short: "str. czasowa",
                narrow: "str. czas."
            },
            millisecond: {
                narrow: "ms",
                short: "ms",
                wide: "milisekunda"
            }
        }
    },
    firstDay: 1,
    weekendRange: {
        start: 6,
        end: 0
    },
    likelySubtags: {
        pl: "pl-Latn-PL"
    }
});

