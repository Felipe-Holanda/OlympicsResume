import styled from 'styled-components';

export const Header = styled.View`
    background-color: #364FC7;
    height: 80px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const StyledInput = styled.TextInput`
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 20px 40px;
    border: 1px solid gray;
`

export const BigText = styled.Text`
    font-size: 18px,
    font-weight: bold;
`

export const SmallText = styled.Text`
    font-size: 12px;
    color: #868E96;
`
export const CardView = styled.View`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    height: 150px;
`
export const CardHeader = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const HeaderText = styled.Text`
    font-size: 18px;
    font-weight: bold;
`

export const HeaderImage = styled.Image`
    width: 80px;
    height: 50px;
    border: 1px solid #868E96;
`

export const CardBody = styled.View`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

export const MedalText = styled.Text`
        font-size: 14px;
        color: #3a3e42;
        `

export const MedalsSection = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    align-items: center;
    justify-content: space-evenly;

    View{
        margin: 5px;
    }
`