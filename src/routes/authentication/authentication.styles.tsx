import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
    width: 900px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: unset;

        > *:first-child {
            margin-bottom: 50px;
        }
    }
`