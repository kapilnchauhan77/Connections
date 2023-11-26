import { Footer } from 'flowbite-react';

function Footbar() {
  return (
    <>
      <Footer className="grow fixed bottom-0 p-3">
        <Footer.Copyright href="/" by="Connections™" year={2023} />
        <Footer.LinkGroup>
          <Footer.Link href="/about">About</Footer.Link>
          <Footer.Link href="/faq">Frequently Asked Questions</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </>
  )
}

export default Footbar;
