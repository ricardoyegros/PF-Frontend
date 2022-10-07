import styled from 'styled-components';

export const Container = styled.div`
    background-color: transparent;
    position: fixed;
    height: 100%;
    top: 150px;
    left: 0px;
    width: 300px;
    left: ${(props) => (props.sidebar ? '0' : '-100%')};
    animation: showSidebar 0.4s;

    > svg {
        position: fixed;
        color: grey;
        width: 30px;
        height: 30px;
        left: 200px;
        margin-top: 20px;
        margin-left: 32px;
        cursor: pointer;
    }

    @keyframes showSidebar {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 300px;
        }
    }
`;

export const Content = styled.div`
    margin-top: 100px;
`;
