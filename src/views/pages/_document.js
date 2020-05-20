import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <link rel='stylesheet' href='/_next/static/style.css'/>
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                      crossOrigin="anonymous"/>
                <link type="text/css" href="./css/index.css"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}