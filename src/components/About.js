import React from 'react';
import styles from '../style';
import { ScrollView, Linking } from 'react-native';
import { Title, Button, Card, Paragraph } from 'react-native-paper';

export default function About() {
    return (
        <ScrollView>
            <Title style={styles.heading}>About</Title>
            <Card style={styles.container}>
                <Title style={{ 'color': 'white' }}>About this app</Title>
                <Paragraph style={{ 'color': 'white' }}>
                    Gopher Tunneler allows you to navigate the Gopher Way at the University
                    of Minnesota's Twin Cities campus. The tunnel system is a maze-like labyrinth;
                    get a better idea of it on the 'Map' tab.
                </Paragraph>
                <Paragraph style={{ 'color': 'white' }}>
                    Want to get somewhere quick? Select your start and end points on the 'Route' tab.
                    You'll get instructions to get from building to building when you hit submit.
                </Paragraph>
            </Card>
            <Title style={styles.heading}>SASE Labs</Title>
            <Card style={styles.container}>
                <Paragraph style={{ 'color': 'white' }}>
                    Gopher Tunneler was developed as a project in SASE Labs. SASE Labs is the University
                    of Minnesota's Society of Asian Scientists and Engineers laboratory division. We work on 
                    interdisciplinary STEM projects and learn new skills together. In just a year, our team went
                    from not knowing how to program in JavaScript to developing this app using React Native and 
                    learning about git, GitHub, higher-order functions, APIs, and much more along the way!
                </Paragraph>
                <Button
                    color='#7dc242'
                    mode='contained'
                    style={{ margin: 20 }}
                    onPress={() => Linking.openURL('https://saseumn.org')}
                >
                    Learn more about SASE
                </Button>
                <Button
                    color='#7dc242'
                    mode='contained'
                    style={{ margin: 20 }}
                    onPress={() => Linking.openURL('https://discord.gg/Z9VEKrh')}
                >
                    Join our discord
                </Button>
            </Card>
            <Title style={styles.heading}>Contributing</Title>
            <Card style={styles.container}>
                <Paragraph style={{ 'color': 'white' }}>
                    The app is based on incomplete research of the tunnels. If you have captioned pictures
                    and written instructions to navigate the Gopher Way, please send them to us!
                </Paragraph>
                <Paragraph style={{ 'color': 'white' }}>
                    The preferred way of contributing is to create a GitHub issue. No programming knowledge
                    is required. Only an email for an account.
                </Paragraph>
                <Button
                    color='#7dc242'
                    mode='contained'
                    style={{ margin: 20 }}
                    onPress={() => Linking.openURL('https://github.com/SASE-Labs-2020/SASE-Labs-2020.github.io/issues/new')}
                >
                    Create an Issue
                </Button>
                <Paragraph style={{ 'color': 'white' }}>
                    If you would prefer not to make a GitHub account, we also have an anonymous form.
                </Paragraph>
                <Button
                    color='#7dc242'
                    mode='contained'
                    style={{ margin: 20 }}
                    onPress={() => Linking.openURL('https://forms.gle/PUGtoRsrAP3jrcj67')}
                >
                    Submit the Form
                </Button>
            </Card>
        </ScrollView>
    );
}