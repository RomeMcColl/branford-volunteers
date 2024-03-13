import Script from 'next/script'
// eslint-disable-next-line import/no-extraneous-dependencies
import Container from '@mui/material/Container'

export default function Page() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-white">
      <Container fixed sx={{ /* need to fix the container this calendar lives in somehow */ }}>
        <div id="SFctr" class="SF" data-org="31593" data-ini="!calendar" data-scl="0" data-sfi="1">
          <Script type="text/javascript" src="https://cdn.membershipworks.com/mfm.js" />
        </div>
      </Container>
    </main>
  );
}
