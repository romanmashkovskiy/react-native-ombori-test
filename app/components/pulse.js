import React, {Component} from 'react';
import {StyleSheet, View, Animated, Dimensions} from 'react-native';


class Circle2 extends Component {
    state = {
        circle2Opacity: new Animated.Value(0),
        circle2Height: new Animated.Value(100),
        circle2Width: new Animated.Value(100),
        circle2Radius: new Animated.Value(50)
    };

    componentDidMount() {
        this.animate();
    }

    animate() {
        Animated.loop(
                Animated.parallel([
                    Animated.timing(
                        this.state.circle2Opacity,
                        {
                            toValue: 0.2,
                            duration: 2000
                        }
                    ),
                    Animated.timing(
                        this.state.circle2Height,
                        {
                            toValue: 200,
                            duration: 2000
                        }
                    ),
                    Animated.timing(
                        this.state.circle2Width,
                        {
                            toValue: 200,
                            duration: 2000
                        }
                    ),
                    Animated.timing(
                        this.state.circle2Radius,
                        {
                            toValue: 100,
                            duration: 2000
                        }
                    ),
                ])
          ,
            {
                iterations: 10
            }
        )
       .start()
    }

    render() {
        return (
                <Animated.View
                    style={{
                        ...this.props.style,
                        opacity: this.state.circle2Opacity,
                        height: this.state.circle2Height,
                        width: this.state.circle2Width,
                        borderRadius: this.state.circle2Radius
                    }}
                />
        )
    }
}

class Circle3 extends Component {
    state = {
        circle3Opacity: new Animated.Value(0),
        circle3Height: new Animated.Value(80),
        circle3Width: new Animated.Value(80),
        circle3Radius: new Animated.Value(40)
    };

    componentDidMount() {
        this.animate();
    }

    animate() {
        Animated.loop(
            Animated.parallel([
                Animated.timing(
                    this.state.circle3Opacity,
                    {
                        toValue: 0.2,
                        duration: 2000,
                        delay: 1000

                    }
                ),
                Animated.timing(
                    this.state.circle3Height,
                    {
                        toValue: 200,
                        duration: 2000,
                        delay: 1000
                    }
                ),
                Animated.timing(
                    this.state.circle3Width,
                    {
                        toValue: 200,
                        duration: 2000,
                        delay: 1000
                    }
                ),
                Animated.timing(
                    this.state.circle3Radius,
                    {
                        toValue: 200,
                        duration: 2000,
                        delay: 1000
                    }
                ),
            ])
            ,
            {
                iterations: 10
            }
        )
            .start()
    }

    render() {
        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    opacity: this.state.circle3Opacity,
                    height: this.state.circle3Height,
                    width: this.state.circle3Width,
                    borderRadius: this.state.circle3Radius
                }}
            />
        )
    }
}




class  Pulse extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    backgroundColor:'green',
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    position: 'absolute'
                }}/>
                <Circle2 style={{
                    backgroundColor:'green',
                    position: 'absolute'}}
                />
                <Circle3 style={{
                    backgroundColor:'green',
                    position: 'absolute'
                }}/>
            </View>
        );
    }
}

export default Pulse;