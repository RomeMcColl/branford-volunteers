import Head from 'next/head';
import Script from 'next/script'
// not sure why this is saying dependency isn't listed
// eslint-disable-next-line import/no-extraneous-dependencies
import Container from '@mui/material/Container'

export default function Page() {
  return (
    <main className="flex flex-1 flex-col text-white">
      <Head>
        <title>Join as a Volunteering Org Today!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
        Complete this form to request membership on the site as a volunteering org. We will review your request and send an email when you've been accepted!</p>
      <Container fixed sx={{ /* styling can go here */ }}>
        {/* data-zzz is the redirect, which we can switch to some success page */}
        <div id="SFctr" class="SF" data-org="31593" data-ini="join" data-zzz="localhost:3000" data-scl="0" data-sfi="1"><Script type="text/javascript" src="https://cdn.membershipworks.com/mfm.js" /></div>
      </Container>
    </main>
  );
}