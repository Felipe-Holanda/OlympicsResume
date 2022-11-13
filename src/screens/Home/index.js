import AppLogo from "../../assets/appLogo.png"
import { Header, StyledInput } from "../../styles/elements"
import { Image, View, FlatList, ScrollView } from "react-native"
import { useState, useEffect } from "react"
import api from "../../services/api"
import CountryCards from "../../components/CountryCards"

export function Home() {

    const [data, setData] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        try {
            api.get("/paises").then((response) => {
                setData(response.data)
            })
        } catch (error) {
            alert("Erro ao carregar os dados \n" + error)
        }
    }, []);

    return (
        <>
            <Header>
                <Image style={{ marginTop: 10 }} source={AppLogo} />
            </Header>
            <View>
                <StyledInput placeholder="Pesquise por um país" onChangeText={(text) => setSearch(text)} />
            </View>
            <ScrollView style={{ backgroundColor: '#f2f2f2' }}>
                {data.length > 0 ? (
                    search.length === 0 ? (
                        <FlatList
                            data={data}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => <CountryCards props={item} />}
                            vertical
                        />
                    ) : (
                        <FlatList
                            data={data.filter((item) => item.country.toLowerCase().includes(search.toLowerCase()))}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => <CountryCards props={item} />}
                            vertical />
                    )
                ) : (
                    <View></View>
                )}
            </ScrollView>
        </>
    )
}