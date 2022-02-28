import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head prefix="og: http://ogp.me/ns#">

          {/*OGP*/}
          <meta property="og:url" content="https:uu-plathome.com" />
          <meta property="og:description" content='"宇大生必須のプラットフォーム"を掲げ、”UU-Circles”と”uu-yell”を運営するメディア団体、"UU-PlatHome"の公式Webサイトです。' />
          <meta property="og:site_name" content="UU-PlatHome" />
          <meta property="og:image" content="https:uu-plathome.com/uuph.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@UU_PlatHome" />

          {/** M plus 2p from adobe font */}
          <script dangerouslySetInnerHTML={{
            __html: `
              (function(d) {
              var config={
                kitId: 'uos7nye' ,
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+"wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded" )return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)})(document);
            `
          }} />

          <link rel="icon" href="/favicon.png" />

          {/* Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-XR6X17WHFF`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XR6X17WHFF', {
                    page_path: window.location.pathname,
                });`,
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

      </Html>
    )
  }
}