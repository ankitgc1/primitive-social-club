import logo from './logo.png';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import twitter from './images/twitter.png'
import discord from './images/discord.png'
import insta from './images/insta.jpeg'
import bgImg from './images/bg.png'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'

import Web3 from 'web3'


function App() {
  // const [account, setAccount] = useState("");

  const contractABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"Mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newTreasuryAddress","type":"address"}],"name":"changeTreasuryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onlyWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"setNftPerAddressLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setOnlyWhitelisted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_users","type":"address[]"}],"name":"whitelistUsers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"whitelistedAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}];
  const contractAddress = "0xaA60deAB753E892b768BCeB3A4a485d23D33Dc07";

  window.web3 = new Web3(window.ethereum);
  const contract = new window.web3.eth.Contract(
    contractABI,
    contractAddress
  );



  const mintNFT = async mintNFTcall => {
    window.web3 = new Web3(window.ethereum);
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    await contract.methods.Mint(1).send({
      from: accounts[0], 
      // gas: 1500000,
      // gasPrice: '30000000000000',
      value: '60000000000000000'
    });
  } 

  // async function MintNFT() {
  //   await contract.methods.Mint(1).send({
  //     from: account, 
  //     // gas: 1500000,
  //     // gasPrice: '30000000000000',
  //     value: "60000000000000000"
  //   });
  // }

  function handleClick() {
    if (window.ethereum) {
      // mintNFT();
    } else {
      alert(
        `wallet Not found!! Pleas Download Metamask "\n
        METAMASK WALLET\n
        https://metamask.io/download `
        );
    }
  }



  const styles = {
    // backgroundImage: 'url('+bgImg+')',
    background: 'black',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '100%',
    width: '100%',
  };

  return (
    <main style={styles}>
      <Navbar className="navbar" fixed="top"  expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img
              alt=""
              src={logo}
              width="400"
              height="80"
              className="d-inline-block align-top"
            />{' '} */}
            Primitive Social Club
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#About">Feature</Nav.Link>
              <Nav.Link href="#Faq">Faq</Nav.Link>
              <Nav.Link href="#Roadmap">Roadmap</Nav.Link>
              <Nav.Link href="#Contact">Contact Us</Nav.Link>
            </Nav>
            <hr></hr>
            <Nav className="me-auto">
              {/* <Nav.Link className="socail"> */}
                <a className="socail" rel="noopener noreferrer" target="_blank" href="https://twitter.com/PrimitiveSocia1">
                  <img className="round"
                    alt=""
                    src={twitter}
                    width="30"
                    height="30"
                  />
                </a>
              {/* </Nav.Link> */}
              {/* <Nav.Link className="socail"> */}
                <a className="socail" rel="noopener noreferrer" target="_blank" href="https://discord.gg/svKtw4vG">
                  <img className="round"
                    alt=""
                    src={discord}
                    width="30"
                    height="30"
                  />
                </a>
              {/* </Nav.Link> */}
              {/* <Nav.Link className="socail"> */}
                <a className="socail" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/primitivesocialclub/">
                  <img className="round"
                    alt=""
                    src={insta}
                    width="30"
                    height="30"
                  />
                </a>
              {/* </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="hero-1" id="home">
          <Row className="mt-5">
            <Col className="mt-5 d-flex justify-content-center text-center">
              <div className="intro white">
                <h1>Welcome to THE Primitive Social Club</h1>
                <br></br>
                {/* <h3>“G0 catch the imposters. AND win <strong className='orange'>$10,000(USD)</strong> ” 😈</h3> */}
              </div>
            </Col>
          </Row>

        <Row className="mt-5 justify-content-center text-center">
          <Col className="d-flex justify-content-center text-center">
            <div className="opensea">
              <a className="opensealink" 
              rel="noopener noreferrer" target="_blank" href="https://discord.gg/svKtw4vG"
              // onClick={handleClick}
              >
                Join Discord
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid id="About" className="hero-2">
        <Container>
            <div className="justify-content-center text-center">
                <h1 className="white"><strong>FEATURES</strong></h1> 
            </div>
          <Row>
            <Col md={6} className="mt-3 justify-content-center text-center">
              <Row className="mt-5">
                <Col className="justify-content-center text-center">
                  <img className="mb-5"
                      alt=""
                      src={img1}
                      width="100%"
                    />
                </Col>
                <Col className="justify-content-center text-center">
                  <img
                    alt=""
                    src={img2}
                    width="100%"
                  />
                </Col>
              </Row>
              <Row>
                <Col className="justify-content-center text-center">
                  <img className="mb-5"
                      alt=""
                      src={img3}
                      width="100%"
                    />
                </Col>
                <Col className="justify-content-center text-center">
                  <img
                    alt=""
                    src={img4}
                    width="100%"
                  />
                </Col>
              </Row>
            </Col>
            <Col className="mt-3 justify-content-center">
              <div className="mt-5  text-center">
                <h5 className="white">
                Welcome to the home page of Primitive Social Club
                I would like to thank you for taking the time to visit. I have highlighted a few key things that will make our community successful and progress smoothly
                </h5> 
              </div>
              <div className="mt-4">
                <h3 className='note'>
                - A play to earn game “Have Developer”
                  </h3>
              </div>
              <div>
                <h3 className='note'>
                  - Staking “Taking Meetings with Contractors already”
                  </h3>
              </div> 
              <div>
                <h3 className='note'>
                  - Merch “Have Contractor just waiting on funding”
                  </h3>
              </div> 
              <div className="mt-4 text-center">
                <h5 className="white">
                  The first Phase of the project will have 200 traits 
                  Funds will immediately be invested back into the community
                </h5> 
              </div>
              <div className="mt-4">
                <h3 className='note'>
                - Buying land in Metaverse
                </h3>
              </div>
              <div>
                <h3 className='note'>
                  - Investing in our Developers ASAP 
                </h3>
              </div> 
              <div>
                <h3 className='note'>
                  - All funding spent will be released to the Community Members for proof
                </h3>
              </div> 
              <div className="mt-4 text-center">
                <h5 className="white">
                The Community’s First and Second Phase developments have been fully funded by the founder
                </h5> 
              </div>
            </Col>
          </Row>
        </Container>
      </Container>


      {/* <Container fluid id="Faq" className="hero-3">
        <Container>
          <Row className="pd-5 mt-5 justify-content-center text-center">
            <h1 className="white"><strong>FREQUENTLY ASKED QUESTIONS</strong></h1>
          </Row>
          <Row className="mt-5">
            <Col>
              <h2 className="white">
               Q. Where will we capture the IMPOSTER ? 
              </h2>
              <h4 className="per"> ⁃ Join the discord to know.</h4>
            </Col>
            <hr className="white"></hr>
          </Row>
          <Row className="mt-5">
            <Col>
              <h2 className="white">
              Q. How many space space dudes?
              </h2>
              <h4 className="per"> - Total 7000 space dudes and 7 imposters.</h4>
            </Col>
            <hr className="white"></hr>
          </Row>
          <Row className="mt-5">
            <Col>
              <h2 className="white">
              Q. Will there be giveaways? 
              </h2>
              <h4 className="per"> ⁃ Yes! We have huge plans and there will be awesome raffles! Additional information may be found in our discord server!.</h4>
            </Col>
            <hr className="white"></hr>
          </Row>

          <Row className="mt-5">
          </Row>
        </Container>
      </Container> */}


      <Container fluid id="Roadmap" className="hero-3">
        <Container>
          <Row className="pd-5 mt-5 justify-content-center text-center">
            <h1 className="white"><strong>PSC ROAD MAP </strong></h1> 
            {/* <h3 className="white">
              As we value our community and its creativity, our roadmap will be updated according to your comments and ideas.
            </h3> */}
          </Row>
          <Row className="mt-5">
            <Col xs={2} md={2} className="justify-content-center text-center">
              <div className="box">
                <strong className="per">20%</strong>
              </div>
            </Col>
            <Col>
              <h4 className="white">- Establish meaningful internet presence
              <div className='presence'>
                <p>• Website </p>
                <p>• Instagram </p>
                <p>• Twitter </p>
                <p>• Discord </p>
                <p>• Establish organizational roles and responsibilities for Community Transparency  </p>
              </div>
              </h4>
              <h4 className="white">- GIVEAWAY to discord members.
              </h4>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={2} md={2} className="justify-content-center text-center">
              <div className="box">
                <strong className="per">40%</strong>
              </div>
            </Col>
            <Col>
              <h4 className="white"> - Weekly Feature Drops of NFT artwork 
              </h4>
              <h4 className="white"> - Announcement of NFT Mint Date TBD
              </h4>
              <h4 className="white"> - Active community members may have opportunity for Moderator positions
              </h4>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={2} md={2} className="justify-content-center text-center">
              <div className="box">
                <strong className="per">80%</strong>
              </div>
            </Col>
            <Col>
              <h4 className="white">-  Once the 75% sold plateau is achieved, holders will be eligible to receive some free merchandise
              </h4>
              <h4 className="white">- PSC will invest in the Metaverse; all holdings will be made public
              </h4>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={2} md={2} className="justify-content-center text-center">
              <div className="box">
                <strong className="per">100%</strong>
              </div>
            </Col>
            <Col>
              <h4 className="white">- Utilities for phase 2 will be announced
                <div className='presence'>
                  <p>• Tokenomics </p>
                  <p>• Game Development </p>
                </div>
              </h4>
              <h4 className="white">- A link will be provided on the website to purchase additional merchandise
                <div className='presence'>
                  <p>• Prices will be discounted to community members </p>
                </div>
              </h4>
              <h4 className="white">-  Founder will be going public after we reach this milestone
              </h4>
            </Col>
          </Row>
          <br>
          </br>
        </Container>
      </Container>



      <Container fluid id="Contact" className="hero-5">
        <Container>
          <Row className="justify-content-center text-center">
            <h1 className="white"><strong>CONTACT US</strong></h1> 
            <h4 className="per">
              Join our Discord and Follow
            </h4>
          </Row>
          <Row className="mt-5 justify-content-center text-center">
            <Col>
              <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/PrimitiveSocia1">
                <img className="round"
                  alt=""
                  src={twitter}
                  width="50"
                  height="50"
                />
              </a>
            </Col>
            <Col>
            <a rel="noopener noreferrer" target="_blank" href="https://discord.gg/svKtw4vG">
              <img className="round"
                alt=""
                src={discord}
                width="50"
                height="50"
              />
            </a>
            </Col>
            <Col>
            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/primitivesocialclub/">
              <img className="round"
                alt=""
                src={insta}
                width="50"
                height="50"
              />
            </a>
            </Col>
          </Row>
          <Row className="mt-5 justify-content-center text-center">
            <Col className="d-flex justify-content-center text-center">
              <div className="opensea">
                <a className="opensealink" 
                rel="noopener noreferrer" target="_blank" href="https://discord.gg/svKtw4vG"
                >
                  Join Discord
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

    </main>
  );
}

export default App;
