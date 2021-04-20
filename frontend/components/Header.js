import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const LogoStyled = styled.h1`
  background: red;
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyled = styled.header`
  .bar {
    border-bottom: 1px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: center;
    align-items: center;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <div className="bar">
        <LogoStyled>
          <Link href="/">Sick Fits</Link>
        </LogoStyled>
      </div>
      <div className="sub-bar">
        <p>search</p>
      </div>
      <Nav />
    </HeaderStyled>
  );
}
