import { styled } from "styled-components";

export const App = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const AppHead = styled.header`
`

export const AppH1 = styled.h1`
padding-left: 78px;
color:  white;
text-shadow: 2px 3px 4px #04ff00;
`

export const Main = styled.div`
`

export const MainChange =styled.div`
display: flex;
flex-direction: row;
gap: 32px;
`
export const MainForButton = styled.div`
`

export const MainButton = styled.button`
color: white;
width: 160px;
height: 40px;
box-shadow: 2px 2px 2px 2px #00cc36;
background:linear-gradient(to bottom, #38c700 5%, #010912 100%);
border-radius:10px;
border:1px solid #000000;
display:inline-block;
cursor:pointer;
font-family:Times New Roman;
font-size:16px;
font-weight:bold;
font-style:italic;
text-decoration:none;
`

export const BorderForBtn = styled.div`
display: flex;
flex-direction: column;
alight-items:center;
justify-content:center;
border: 1px solid #04ff00;
border-radius:10px;
background:linear-gradient(to bottom, #38c700 5%, #010912 100%);
`
export const ChangeForBtn = styled.div`
`

export const ChangeButton = styled.p`
padding-left: 10px;
color: white;
font-family:Times New Roman;
font-size:16px;
font-weight:bold;
font-style:italic;
text-decoration:none;
cursor:pointer;
`
export const MainForInput = styled.div`
`

export const MainInput = styled.input`
height: 40px;
width: 240px;
color: white;
box-shadow:0px 0px 0px 2px #00cc36;
background:linear-gradient(to bottom, #38c700 5%, #010912 100%);
border-radius:10px;
border:1px solid #000000;
font-family:Times New Roman;
font-size:16px;
font-weight:bold;
font-style:italic;

::placeholder {
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
    font-style: italic;
    padding-right: 10px;
}
`
export const MainForSubmit = styled.div`
`

export const SubmitButton = styled.button`
color: white;
width: 160px;
height: 40px;
box-shadow: -2px 2px 2px 2px #00cc36;
background:linear-gradient(to bottom, #38c700 5%, #010912 100%);
border-radius:10px;
border:1px solid #000000;
display:inline-block;
cursor:pointer;
font-family:Times New Roman;
font-size:16px;
font-weight:bold;
font-style:italic;
text-decoration:none;
`

export const MainList = styled.div`
`
export const Navigation = styled.nav`
`
export const Pagination = styled.div`
padding-left: 178px;
display: flex;
flex-direction: row;
align-items: center;
justify-contetn: center;
gap:5px;
`
export const PaginationItem= styled.div`
`
export const PaginationButton = styled.button`
color: white;
box-shadow: 1px 1px 1px 1px #00cc36;
background:linear-gradient(to bottom, #38c700 5%, #010912 100%);
border:1px solid #000000;
display:inline-block;
cursor:pointer;
font-family:Times New Roman;
font-size:16px;
font-weight:bold;
font-style:italic;
`
export const UsersList = styled.div`
padding-top: 16px;
padding-bottom: 16px;
display:flex;
flex-direction: column:
gap:16px;
justify-content: center;
align-items: center;
cursor:pointer;
font-family:Times New Roman;
font-size:24px;
font-weight:bold;
font-style:italic;
`
export const UserInfo = styled.div`
box-shadow: -2px 2px 2px 2px #00cc36;
background:linear-gradient(to bottom, #38c700 5%, #010912 100%);
border-radius:10px;
border:1px solid #000000;
display:inline-block;
`
export const ListItems = styled.div`
padding-bottom: 16px;
`

export const SkipButton = styled.img`
width:32px;
hight:32px;
`
export const UserAvatar = styled.img`
width:100%;
`
export const UserLogin = styled.h2`
padding-left: 16px;
`

export const UserId = styled.p`
padding-left: 16px;
`