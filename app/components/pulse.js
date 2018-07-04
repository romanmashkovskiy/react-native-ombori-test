import React, {Component} from 'react';
import { View, Animated } from 'react-native';

class Circle2 extends Component {
    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.animate();
    }

    animate() {
        this.animatedValue.setValue(0);
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 2000
            }
        ).start(() => this.animate())
    }

    render() {
        const circle2Opacity = this.animatedValue.interpolate({
            inputRange: [0 , 1],
            outputRange: [0, 0.2]
        });
        const circle2Height = this.animatedValue.interpolate({
            inputRange: [0 , 1],
            outputRange: [100, 200]
        });
        const circle2Width = this.animatedValue.interpolate({
            inputRange: [0 , 1],
            outputRange: [100, 200]
        });
        const circle2Radius = this.animatedValue.interpolate({
            inputRange: [0 , 1],
            outputRange: [50, 100]
        });

        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    opacity: circle2Opacity,
                    height: circle2Height,
                    width: circle2Width,
                    borderRadius: circle2Radius
                }}
            />
        )
    }
}

class Circle3 extends Component {
    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.animate();
    }

    animate() {
        this.animatedValue.setValue(0);
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 2000,
                delay: 1000
            }
        ).start(() => this.animate())
    }

    render() {
        const circle3Opacity = this.animatedValue.interpolate({
            inputRange: [0 , 1],
            outputRange: [0, 0.2]
        });
        const circle3Height = this.animatedValue.interpolate({
            inputRange: [0 , 1],
            outputRange: [100, 200]
        });
        const circle3Width = this.animatedValue.interpolate({
            inputRange: [0 , 1],
            outputRange: [100, 200]
        });
        const circle3Radius = this.animatedValue.interpolate({
            inputRange: [0 , 1],
            outputRange: [50, 100]
        });

        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    opacity: circle3Opacity,
                    height: circle3Height,
                    width: circle3Width,
                    borderRadius: circle3Radius
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