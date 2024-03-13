import Head from 'next/head';
import Script from 'next/script'
// not sure why this is saying dependency isn't listed
// eslint-disable-next-line import/no-extraneous-dependencies
import Container from '@mui/material/Container'

export default function Page() {
  return (
    <main className="flex flex-1 flex-col text-white">
      <Head>
        <title>Login to your Volunteering Org account to add events to calendar, and manage your account.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Login as a Volunteering Org member
        </h1>
        <Container fixed sx={{ /* styling can go here */ }}>
          {/* data-zzz is the redirect, which we can switch to some success page */}
          <div id="SFctr" class="SF" data-org="31593" data-ini="myaccount" data-zzz="localhost:3000" data-scl="0" data-sfi="1">
            <Script type="text/javascript" src="https://cdn.membershipworks.com/mfm.js" />
          </div>
        </Container>
      </main>
    </main>
  );
}
