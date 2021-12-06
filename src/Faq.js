import React from 'react'
import { Accordion, Container } from 'react-bootstrap'
const Faq = () => {
    return (
        <>
        <div className="faqs" style={{backgroundColor:"black"}}>
        <Container>
        <h2 id="Faq" style={{color:"white"}}
        >FAQS</h2>
          <Accordion defaultActiveKey="0" style={{color:"black"}}> 
 
  <Accordion.Item  style={{backgroundColor:"black",color:"white" }}>
    <Accordion.Header  className="accordhead" style={{ borderTop:"1px solid white !important"}}>What is the CrazyCubes NFT Game Universe?</Accordion.Header>
    <Accordion.Body>
    CrazyCubes it’s a collection of 10,000 unique (out of 2million+ combinations) programmatically generated Non-Fungible Tokens looking for dad on the Ethereum blockchain as ERC-721 NFTs. Each MetaKid token grants access to the Exclusive DAO community and voting rights over the Blue-Chip NFTs DAO assets and the CrazyCubes Game Studio and IP. A first of its kind.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1" style={{backgroundColor:"black",color:"white"}}>
    <Accordion.Header className="accordhead" >When will the CrazyCubes NFT be available?</Accordion.Header>
    <Accordion.Body>
    This will be announced in the next couple of weeks.

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2" style={{backgroundColor:"black",color:"white"}}>
    <Accordion.Header className="accordhead" >How much is each mint?</Accordion.Header>
    <Accordion.Body>
    Each CrazyCubes NFT will cost 0.06 ETH + gas fees
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3" style={{backgroundColor:"black",color:"white"}}>
    <Accordion.Header className="accordhead" >How many can I mint in Public Sale?
</Accordion.Header>
    <Accordion.Body>
    You can mint up to 5 CrazyCubes per TXN (Transaction).
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4" style={{backgroundColor:"black",color:"white"}}>
    <Accordion.Header className="accordhead" >When will I be able to see my CrazyCubes (When is Reveal)?</Accordion.Header>
    <Accordion.Body>
    Announced Soon… 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5" style={{backgroundColor:"black",color:"white"}}>
    <Accordion.Header className="accordhead" >Where will I be able to buy CrazyCubes NFTs?</Accordion.Header>
    <Accordion.Body>
    Once the public sale is open you will be able to mint CrazyCubes NFTs on our site only:<a href="http://CrazyCubes.io" >http://CrazyCubes.io</a> make sure to visit #official-links as that is the only way we will be publishing our URLs.<br/>
    
Make sure to have your Metamask ready and loaded with ETH to mint CrazyCubes on launch day. Afterwards, you will be able to trade CrazyCubes NFT on <a href="https://OpenSea.io   "> https://OpenSea.io </a>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="6" style={{backgroundColor:"black",color:"white"}}>
    <Accordion.Header className="accordhead" >How are CrazyCubes giving back to the community?</Accordion.Header>
    <Accordion.Body>
    200 NFTs are going to be reserved, 100 for the team, and 100 for community and marketing, the plan is to Collaborate with other NFT communities as well as introduce a $3cr3T G4M3 really soon, where community members will be able to win a FREE CrazyCubes NFT each week. More info on this really soon...
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="7" style={{backgroundColor:"black",color:"white"}}>
    <Accordion.Header className="accordhead" >How much are the royalties for secondary sales?</Accordion.Header>
    <Accordion.Body>
    7.5% of Open Sea royalties are going to be added to the DAO Wallet every month when they’re paid by Open Sea, 2.5% will be allocated on our NFT Game Universe development and 5% will go to Blue Chip NFT Purchases and the DAO Members will decide to acquire and 2.5% will go to the team for further development and marketing purposes.
<br />
More FAQ will be posted. If you have a question, please don't hesitate to ask! 
    </Accordion.Body>
  </Accordion.Item>
</Accordion>  
</Container>
</div>
        </>
    )
}

export default Faq
