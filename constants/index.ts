import { BadgeDollarSign, CloudSun, LucideIcon, PartyPopper, QrCode, Trophy } from "lucide-react";

export interface parameterType {
  name: string;
  description: string;
  example: string;
  type: string;
  required: boolean;
}

export interface DocsItemProp {
  title: string;
  endpoint: string;
  method: string;
  parameters?: parameterType[];
  description: string;
  limiter: string;
  endpointExample: string;
  response: string;
}

export interface Categories {
  [key: string]: DocsItemProp[];
}

export const iconMapping: Record<string, LucideIcon> = {
  QR: QrCode,
  Finance: BadgeDollarSign,
  Weather: CloudSun,
  Sports: Trophy,
  Entertainment: PartyPopper
};

export const endpoints: Categories = {
  QR: [
    {
      title: "QR Code Generator",
      endpoint: "/qr/generate",
      method: "GET",
      parameters: [
        {
          name: "data",
          description: "The data to be encoded",
          example: "?data=test",
          type: "string",
          required: true,
        },
      ],
      description: "Generate a QR Code",
      limiter: "2 requests per second",
      endpointExample: "https://general-api.vercel.app/qr/generate?data=test",
      response: `{
        "QR_URL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcwAAAHMAQAAAABwo
        KUrAAABUElEQVR42u3dQYrDMAwFUNML+P63zA06MCST2JYzUJCbxfOilOC30eIjyykt70/XV
        lAURRPpVvr1+2z/2LcFW17l44WiKPrPukbQkUNdGE22qDCKounZtMUt090WFUZRdHU2HUs2
        oSj6sGwqpcbnPNmEouiybHrPcuh8Zt6EoujibJr2UtFo/NiiwiiKZmZT/G7BpKu6bFFhFE
        XTs+nunm5ftdunwiiKpp/p6l8ONd+6qXgTXyqMomhy3xRF1TBv6kJLNqEomp9N9XodF53
        krn2TeROKouvOdPGv6JqD3fkhm1AUze+bbu7pupQyC0dRdGXfNDnnRQGlb0JRdFE2DS9
        9T35K10SVCqMomp5N0ftNk4OdvglF0S9m07CqezoURZ/VN3VXebIJRdFF2TTOm4bxk2
        xCUXRxNg3PmjBqpkxnB6XCKIpmZpO/fEBR9HH0B5AsmAY1Y0vGAAAAAElFTkSuQmCC"
      }`,
    },
  ],
  Finance: [
    {
      title: "Get general information",
      endpoint: "/finance/general-info",
      method: "GET",
      parameters: [
        {
          name: "ticker",
          description: "Ticker symbol",
          example: "?ticker=TSLA",
          type: "string",
          required: true,
        },
      ],
      description: `Get general information about a company providing its ticker symbol,
        accepts values in lower and upper case`,
      limiter: "1 request per second",
      endpointExample:
        "https://general-api.vercel.app/finance/general-info?ticker=tsla",
      response: `{
        "address1":"1 Tesla Road",
        "city":"Austin",
        "state":"TX",
        "zip":"78725",
        "country":"United States",
        "phone":"512 516 8177",
        "website":"https://www.tesla.com",
        "industry":"Auto Manufacturers",
        "industryKey":"auto-manufacturers",
        "industryDisp":"Auto Manufacturers",
        "sector":"Consumer Cyclical",
        "sectorKey":"consumer-cyclical",
        "sectorDisp":"Consumer Cyclical",
        "longBusinessSummary":"Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, and internationally. It operates in two segments, Automotive, and Energy Generation and Storage. The Automotive segment offers electric vehicles, as well as sells automotive regulatory credits; and non-warranty after-sales vehicle, used vehicles, retail merchandise, and vehicle insurance services. This segment also provides sedans and sport utility vehicles through direct and used vehicle sales, a network of Tesla Superchargers, and in-app upgrades; purchase financing and leasing services; services for electric vehicles through its company-owned service locations and Tesla mobile service technicians; and vehicle limited warranties and extended service plans. The Energy Generation and Storage segment engages in the design, manufacture, installation, sale, and leasing of solar energy generation and energy storage products, and related services to residential, commercial, and industrial customers and utilities through its website, stores, and galleries, as well as through a network of channel partners; and provision of service and repairs to its energy product customers, including under warranty, as well as various financing options to its solar customers. The company was formerly known as Tesla Motors, Inc. and changed its name to Tesla, Inc. in February 2017. Tesla, Inc. was incorporated in 2003 and is headquartered in Austin, Texas.",
        "fullTimeEmployees":127855,
        "companyOfficers":[{"maxAge":1,"name":"Mr. Elon R. Musk","age":50,"title":"Technoking of Tesla, CEO & Director","yearBorn":1972,"fiscalYear":2022,"exercisedValue":0,"unexercisedValue":27819718656},{"maxAge":1,"name":"Mr. Andrew D. Baglino","age":41,"title":"Senior Vice President of Powertrain & Energy Engineering","yearBorn":1981,"fiscalYear":2022,"totalPay":303000,"exercisedValue":33866368,"unexercisedValue":57355632},{"maxAge":1,"name":"Mr. Vaibhav  Taneja","age":44,"title":"CFO, Corporate Controller & Chief Accounting Officer","yearBorn":1978,"fiscalYear":2022,"exercisedValue":0,"unexercisedValue":0},{"maxAge":1,"name":"Mr. Martin  Viecha","title":"Senior Director for Investor Relations","fiscalYear":2022,"exercisedValue":0,"unexercisedValue":0},{"maxAge":1,"name":"Mr. Alan  Prescott","age":43,"title":"Vice President of Legal","yearBorn":1979,"fiscalYear":2022,"exercisedValue":0,"unexercisedValue":0},{"maxAge":1,"name":"Mr. Dave  Arnold","title":"Senior Director of Global Communications","fiscalYear":2022,"exercisedValue":0,"unexercisedValue":0},{"maxAge":1,"name":"Brian  Scelfo","title":"Senior Director of Corporate Development","fiscalYear":2022,"exercisedValue":0,"unexercisedValue":0},{"maxAge":1,"name":"Mr. Jeffrey Brian Straubel","age":46,"title":"Independent Director","yearBorn":1976,"fiscalYear":2022,"totalPay":250560,"exercisedValue":9413986,"unexercisedValue":60867856},{"maxAge":1,"name":"Mr. Franz  von Holzhausen","title":"Chief Designer","fiscalYear":2022,"exercisedValue":0,"unexercisedValue":0},{"maxAge":1,"name":"Mr. Xiaotong  Zhu","age":42,"title":"Senior Vice President of Automotive","yearBorn":1980,"fiscalYear":2022,"exercisedValue":0,"unexercisedValue":0}],
        "auditRisk":8,
        "boardRisk":10,
        "compensationRisk":8,
        "shareHolderRightsRisk":9,
        "overallRisk":9,
        "governanceEpochDate":1701129600,
        "compensationAsOfEpochDate":1672444800,
        "maxAge":86400,
        "priceHint":2,
        "previousClose":244.14,
        "open":245.14,
        "dayLow":236.91,
        "dayHigh":245.22,
        "regularMarketPreviousClose":244.14,
        "regularMarketOpen":245.14,
        "regularMarketDayLow":236.91,
        "regularMarketDayHigh":245.22,
        "payoutRatio":0.0,"beta":2.281,
        "trailingPE":77.44517,
        "forwardPE":68.79083,
        "volume":127408236,
        "regularMarketVolume":127408236,
        "averageVolume":121739466,
        "averageVolume10days":122881450,
        "averageDailyVolume10Day":122881450,
        "bid":236.42,
        "ask":237.71,
        "bidSize":900,
        "askSize":1000,
        "marketCap":763195097088,
        "fiftyTwoWeekLow":101.81,
        "fiftyTwoWeekHigh":299.29,
        "priceToSalesTrailing12Months":7.9562473,
        "fiftyDayAverage":235.1682,
        "twoHundredDayAverage":223.90755,
        "trailingAnnualDividendRate":0.0,
        "trailingAnnualDividendYield":0.0,
        "currency":"USD",
        "enterpriseValue":746334453760,
        "profitMargins":0.11213,
        "floatShares":2718422838,
        "sharesOutstanding":3178919936,
        "sharesShort":92715309,
        "sharesShortPriorMonth":84687963,
        "sharesShortPreviousMonthDate":1697155200,
        "dateShortInterest":1700006400,
        "sharesPercentSharesOut":0.0292,
        "heldPercentInsiders":0.13043,
        "heldPercentInstitutions":0.44206002,
        "shortRatio":0.74,
        "shortPercentOfFloat":0.0335,
        "impliedSharesOutstanding":3178919936,
        "bookValue":16.818,"priceToBook":14.275181,
        "lastFiscalYearEnd":1672444800,
        "nextFiscalYearEnd":1703980800,
        "mostRecentQuarter":1696032000,
        "earningsQuarterlyGrowth":-0.437,
        "netIncomeToCommon":10791000064,
        "trailingEps":3.1,"forwardEps":3.5,
        "pegRatio":25.87,
        "lastSplitFactor":"3:1",
        "lastSplitDate":1661385600,
        "enterpriseToRevenue":7.78,
        "enterpriseToEbitda":49.256,
        "52WeekChange":0.23206401,
        "SandP52WeekChange":0.121840954,
        "exchange":"NMS",
        "quoteType":"EQUITY",
        "symbol":"TSLA",
        "underlyingSymbol":"TSLA",
        "shortName":"Tesla, Inc.",
        "longName":"Tesla, Inc.",
        "firstTradeDateEpochUtc":1277818200,
        "timeZoneFullName":"America/New_York",
        "timeZoneShortName":"EST",
        "uuid":"ec367bc4-f92c-397c-ac81-bf7b43cffaf7",
        "messageBoardId":"finmb_27444752",
        "gmtOffSetMilliseconds":-18000000,
        "currentPrice":240.08,
        "targetHighPrice":345.27,
        "targetLowPrice":22.11,
        "targetMeanPrice":204.34,
        "targetMedianPrice":227.15,
        "recommendationMean":2.8,
        "recommendationKey":"hold",
        "numberOfAnalystOpinions":38,"totalCash":26076999680,
        "totalCashPerShare":8.203,
        "ebitda":15152000000,
        "totalDebt":8186999808,
        "quickRatio":1.08,
        "currentRatio":1.69,
        "totalRevenue":95924002816,
        "debtToEquity":15.023,
        "revenuePerShare":30.277,
        "returnOnAssets":0.07965,
        "returnOnEquity":0.22459999,
        "grossProfits":20853000000,
        "freeCashflow":1612000000,
        "operatingCashflow":12163999744,
        "earningsGrowth":-0.442,
        "revenueGrowth":0.088,
        "grossMargins":0.19805999,
        "ebitdaMargins":0.15796,
        "operatingMargins":0.07555,
        "financialCurrency":"USD",
        "trailingPegRatio":2.7061
    }`,
    },
    {
      title: "Current stock value",
      endpoint: "/finance/current-value",
      method: "GET",
      parameters: [
        {
          name: "ticker",
          description: "Ticker symbol",
          example: "?ticker=TSLA",
          type: "string",
          required: true,
        },
      ],
      description: `Get the current price of any company's stock,
      accepts values in lower and upper case`,
      limiter: "1 request per second",
      endpointExample:
        "https://general-api.vercel.app/finance/current-value?ticker=tsla",
      response: `{
        "current_value":240.0800018310547,
        "info":{
          "ticker":"tsla",
          "company":"Tesla, Inc.",
          "currency":"USD",
          "date":"2023-12-01, 13:43:54"
        }
      }`,
    },
    {
      title: "Currency conversion",
      endpoint: "/finance/currency-convert",
      method: "GET",
      parameters: [
        {
          name: "from_curr",
          description: "Convert from this currency, USD/EUR/GBP etc...",
          example: "?from_curr=USD",
          required: true,
          type: "string",
        },
        {
          name: "to_curr",
          description: "Convert to this currency, USD/EUR/GBP etc...",
          example: "&to_curr=EUR",
          required: true,
          type: "string",
        },
        {
          name: "amount",
          description: "The amount you want to convert, default is 1",
          example: "&amount=5.5",
          required: false,
          type: "float",
        },
      ],
      description: `Convert currency for example USD to EUR, GBP to JPY etc... accepts values in lower and upper case`,
      limiter: "1 request per second",
      endpointExample:
        "https://general-api.vercel.app/finance/currency-convert?from_curr=USD&to_curr=EUR&amount=10",
      response: `{
        "result":9.199000000953674,
        "info":{
          "from_curr":"USD",
          "to_curr":"EUR",
          "amount":10.0,
          "date":"2023-12-01"
        }
      }`,
    },
    {
      title: "Stock historical data",
      endpoint: "/finance/stock-data",
      method: "GET",
      parameters: [
        {
          name: "ticker",
          description: "Ticker symbol",
          example: "?ticker=AAPL",
          required: true,
          type: "string",
        },
        {
          name: "start",
          description:
            "Start date in format YYYY-MM-DD (no need for leading 0's)",
          example: "?start=2020-2-4",
          required: true,
          type: "string",
        },
        {
          name: "end",
          description:
            "End date in format YYYY-MM-DD, if you want data until present day no need for a date the value can be 'now' or 'today'",
          example: "&end=now/&end=2021-10-25",
          required: true,
          type: "string",
        },
        {
          name: "interval",
          description:
            "Data interval, default is 1 day possible intervals:1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo",
          example: "&interval=30m",
          required: false,
          type: "string",
        },
      ],
      description: `Get stock data from any period of time until present day,
      accepts values in lower and upper case`,
      limiter: "1 request per 2 seconds / 10 requests per minute",
      endpointExample:
        "https://general-api.vercel.app/finance/stock-data?ticker=msft&start=2023-11-29&end=now",
      response: `{
        "info":{
          "ticker":"msft",
          "company":"Microsoft Corporation",
          "currency":"USD",
          "interval":"1d",
          "start_date":"2023-11-29",
          "end_date":"2023-12-01"
        },
        "stock_data":[{
          "Date":"2023-11-29",
          "Open":383.760009765625,
          "High":384.29998779296875,
          "Low":377.44000244140625,
          "Close":378.8500061035156,
          "Adj Close":378.8500061035156,
          "Volume":28963400
        },{
          "Date":"2023-11-30",
          "Open":378.489990234375,
          "High":380.0899963378906,
          "Low":375.4700012207031,
          "Close":378.9100036621094,
          "Adj Close":378.9100036621094,
          "Volume":30531000
        }]
      }`,
    },
  ],
  Weather: [
    {
      title: "General weather data",
      endpoint: "/weather/general",
      method: "GET",
      parameters: [
        {
          name: "city",
          description: "City name",
          example: "?city=Lod",
          required: true,
          type: "string",
        },
        {
          name: "lang",
          description: "Language, default is en(English)",
          example: "&lang=he",
          required: false,
          type: "string",
        },
      ],
      description:
        "Get general weather data for any city, accepts values in lower and upper case",
      limiter: "1 request per second",
      endpointExample:
        "https://general-api.vercel.app/weather/general?city=london",
      response: `{
        "city":"London",
        "coord":{
          "lon":-0.1257,
          "lat":51.5085
        },
        "description":"broken clouds",
        "temperature":{
          "celsius":{
            "temp":3.22,
            "feels_like":1.86,
            "daily_min":1.72,
            "daily_max":4.85
          },
          "fahrenheit":{
            "temp":37.8,
            "feels_like":35.35,
            "daily_min":35.1,
            "daily_max":40.73
          },
          "kelvin":{
            "temp":276.37,
            "feels_like":275.01,
            "daily_min":274.87,
            "daily_max":278
          }
        },
        "pressure":1007,
        "humidity":85,
        "wind":{
          "direction":360,
          "speed":{
            "metric":{
              "km/h":5.54,
              "m/s":1.54
            },
            "imperial":{
              "mp/h":3.44,
              "f/s":5.05
            },
            "knots":3
          }
        },
        "cloud_percentage":53,
        "sunrise":"2023-12-01 07:43:27",
        "sunset":"2023-12-01 15:55:42"
      }`,
    },
    {
      title: "Current temperature",
      endpoint: "/weather/current-temperature",
      method: "GET",
      parameters: [
        {
          name: "city",
          description: "City name",
          example: "?city=tokyo",
          required: true,
          type: "string",
        },
        {
          name: "unit",
          description:
            "Unit, default is celsius - can be celsius, fahrenheit or kelvin",
          example: "&unit=kelvin",
          required: false,
          type: "string",
        },
      ],
      description:
        "Get current temperature for any city, accepts values in lower and upper case",
      limiter: "1 request per second",
      endpointExample:
        "https://general-api.vercel.app/weather/current-temperature?city=paris&unit=kelvin",
      response: `{
        "current temperature":276.07
      }`,
    },
  ],
  Sports: [
    {
      title: "Upcoming football matches",
      endpoint: "/sports/football/matches",
      method: "GET",
      parameters: [
        {
          name: "day",
          description: `The day of the matches, there are 3 options:
           0 - today, 1 - tomorrow, 2 - in 2 days, default is 0(today)`,
          example: "?day=0",
          type: "number",
          required: false,
        },
      ],
      description: `Get an array of the upcoming football matches from the 
      more popular leagues and competitions untill the next 2 days`,
      limiter: "1 reqest per 2 seconds or 10 per minute",
      endpointExample:
        "https://general-api.vercel.app/sports/football/matches?day=2",
      response: `[{
        "event":"Serie A",
        "time":"14:45 EST",
        "team1":"Torino",
        "team2":"Atalanta"
      },{
        "event":"La Liga",
        "time":"15:00 EST",
        "team1":"Celta Vigo",
        "team2":"Cadiz"
      },{
        "event":"FA Cup",
        "time":"14:45 EST",
        "team1":"Wimbledon",
        "team2":"Ramsgate"
      }]`,
    },
  ],
  Entertainment: [
    {
      title: "Random dad jokes",
      endpoint: "/entertainment/dad-joke",
      method: "GET",
      description: "Get 1 random dad joke",
      limiter: "1 request per second",
      endpointExample: "https://general-api.vercel.app/entertainment/dad-joke",
      response: `{
        "joke":"I'm on a whiskey diet. I've lost three days already."
      }`,
    },
    {
      title: 'Random "yo momma" joke',
      endpoint: "/entertainment/yo-momma-joke",
      method: "GET",
      description: "Get 1 random yo momma joke",
      limiter: "1 request per second",
      endpointExample: "https://general-api.vercel.app/entertainment/yo-momma-joke",
      response: `{
        "joke":"Yo mamma is so fat every time she tries to hide she is hiding that object that she is trying to hide by"
      }`,
    },
    {
      title: "Random Chuck Norris joke",
      endpoint: "/entertainment/chuck-norris-joke",
      method: "GET",
      description: "Get 1 random chuck norris joke",
      limiter: "1 request per second",
      endpointExample: "https://general-api.vercel.app/entertainment/chuck-norris-joke",
      response: `{
        "joke":"Chuck Norris puts the hard in hard-on."
      }`,
    },
    {
      title: "Random fact",
      endpoint: "/entertainment/random-fact",
      method: "GET",
      description: "Get 1 random fact",
      limiter: "1 request per second",
      endpointExample: "https://general-api.vercel.app/entertainment/random-fact",
      response: `{
        "fact":"Tigers not only have striped fur, they have striped skin!"
      }`,
    },
    {
      title: "Random riddle",
      endpoint: "/entertainment/random-riddle",
      method: "GET",
      description: "Get 1 random riddle",
      limiter: "1 request per second",
      endpointExample: "https://general-api.vercel.app/entertainment/random-riddle",
      response: `{
        "riddle":"Where are the lakes that are referred to in the “Los Angeles Lakers?“",
        "answer":"In Minnesota. The team was originally known as the Minneapolis Lakers and kept the name when they moved west"
      }`,
    },
  ],
};
