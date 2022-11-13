import { View, Text, TouchableOpacity } from "react-native"
import { CardView, CardBody, CardHeader, MedalsSection, HeaderText, HeaderImage, MedalText } from "../../styles/elements"

export default function CountryCards({ props }) {
    return (
        <CardView>
            <CardHeader>
                <HeaderImage source={{ uri: props.flag_url }} alt={"Bandeira do país: " + props.country} />
                <HeaderText>{props.country}</HeaderText>
            </CardHeader>
            <CardBody>
                <MedalText style={{ textAlign: 'center' }}>Quantidade de medalhas desta nação:</MedalText>
                <MedalsSection>
                    <View>
                        <Text>{`🥇 ${props.medal_gold}`}</Text>
                    </View>
                    <View>
                        <Text>{`🥈 ${props.medal_silver}`}</Text>
                    </View>
                    <View>
                        <Text>{`🥉 ${props.medal_bronze}`}</Text>
                    </View>
                </MedalsSection>
            </CardBody>
        </CardView>
    )
}