import React from "react";
import { Link, withRouter } from "react-router-dom";
import Styled from "styled-components";

const Header = Styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = Styled.ul`
    display: flex;
    text-align: center;
`;

const Item = Styled.li`
    width: 50px;
    height: 50px;
    text-align: center;
    border-bottom: 3px solid ${props => props.current ? "#3498db" : "transparent"};
    transition:border-bottom .5s ease-in-out;
`;

const SLink = Styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default withRouter(({location: {pathname}}) => (
    <Header>
        <List>
            <Item current={pathname === "/kimflix/"}>
                <SLink to="/kimflix/">Movies</SLink>
            </Item>
            <Item current={pathname === "/kimflix/tv"}>
                <SLink to="/kimflix/tv">TV</SLink>
            </Item>
            <Item current={pathname === "/kimflix/search"}>
                <SLink to="/kimflix/search">Search</SLink>
            </Item>
        </List>
    </Header>
));