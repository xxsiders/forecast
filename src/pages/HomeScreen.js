import React from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ConditionImage from '../components/ConditionImage';
import fetchWeather from '../middleware/fetchWeather';
import Colors from '../components/Colors';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dayWeek: null,
            dark: true,
            today: {
                the_temp: null,
                weather_state_abbr: null,
                weather_state_name: null
            },
            tomorrow: {
                the_temp: null,
                weather_state_abbr: null,
                weather_state_name: null
            },
            nextDay: {
                the_temp: null,
                weather_state_abbr: null,
                weather_state_name: null
            }
        }
    }

    componentWillMount = () => {
        this.getLocationAsync();
    }

    componentDidMount = () => {
        let twoDays = new Date().getDate() + 2
        let date = new Date()
        date.setDate(twoDays)
        this.setState({ dayWeek: date.toDateString().split(' ')[0] })
    }

    getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            alert('Permission to access location was denied');
        }
        let location = await Location.getCurrentPositionAsync()
        this.props.fetchWeather(location.coords)
    }

    parseValue = (value) => (
        parseInt(value)
    )
    renderData = () => {
        const { data, pending, title } = this.props
        const { dark, dayWeek } = this.state
        const styles = StyleSheet.create({
            scroll: {
                flex: 1,
                backgroundColor: dark ? Colors.dark : Colors.light,
            },
            container: {
                flex: 1,
                alignItems: 'center',
                paddingTop: 40
            },
            title: {
                fontSize: 60,
                color: dark ? Colors.white : Colors.dark,
                marginTop: 10,
                fontWeight: '600',
                textTransform: 'uppercase',
            },
            temp: {
                fontSize: 60,
                color: dark ? Colors.white : Colors.dark,
                marginVertical: 10,
                fontWeight: '600'
            },
            status: {
                fontSize: 30,
                color: dark ? Colors.white : Colors.dark,
                fontWeight: '600',
                textTransform: 'capitalize'
            },
            cast: {
                marginTop: '10%',
                width: '90%',
                backgroundColor: dark ? '#464646' : '#e1e1e1',
                borderRadius: 10,
                alignItems: 'center',
                paddingVertical: 10
            },
            castFont: {
                fontSize: 32,
                color: dark ? Colors.white : Colors.dark,
                fontWeight: '500'
            },
            castInfo: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '90%',
                marginVertical: 10
            },
            header: {
                padding: 5,
                marginTop: 10
            },
            loader: {
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: dark ? Colors.dark : Colors.light,
                flex: 1
            },
            themeBtn: {
                fontSize: 21,
                color: dark ? Colors.white : Colors.dark
            }
        });

        if (data[0] != undefined && !pending) {
            return <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.setState({ dark: !dark })} >
                        <Text style={styles.themeBtn}>{dark ? 'Light' : 'Dark'} Theme</Text>
                    </TouchableOpacity>
                    <Text style={styles.title} >{title}</Text>
                    <Text style={styles.temp}>{this.parseValue(data[0].the_temp)}‎°C</Text>
                    {<ConditionImage src={data[0].weather_state_abbr} />}
                    <Text style={styles.status}>{data[0].weather_state_name}</Text>
                    <View style={styles.cast}>
                        <View style={styles.castInfo}>
                            <Text style={styles.castFont}>Today</Text>
                            <Text style={styles.castFont}>{this.parseValue(data[1].the_temp)}‎°C</Text>
                        </View>
                        <View style={styles.castInfo}>
                            <Text style={styles.castFont}>Tomorrow</Text>
                            <Text style={styles.castFont}>{this.parseValue(data[2].the_temp)}‎°C</Text>
                        </View>
                        <View style={styles.castInfo}>
                            <Text style={styles.castFont}>{dayWeek}</Text>
                            <Text style={styles.castFont}>{this.parseValue(data[3].the_temp)}‎°C</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        } else {
            return <View style={styles.loader}>
                <ActivityIndicator size='large' color='gray' />
            </View>
        }

    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {this.renderData()}
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchWeather,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)