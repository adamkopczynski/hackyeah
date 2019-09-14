import React from 'react';

import {Container, View, Text, TouchableOpacity, Header, Title, Footer, Button, Left, Right, Body, List, ListItem, 
    Icon, Separator, Image, Input, Content, Item, StyleSheet} from 'react-native';

class Learn extends React.Component {

    render() {
        
        let pic = "<https://www.google.com/search?q=image&safe=active&sxsrf=ACYBGNQCj1hYS_cUTTZgDPqGToUiAUEEBQ:1568472095933&tbm=isch&source=iu&ictx=1&fir=CJwabmfmxl2ySM%253A%252CpFs_4Fcq5AgpmM%252C_&vet=1&usg=AI4_-kSmsJSXmOnLPc_7R6JjVOmyfiRQpw&sa=X&";
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                    <Text>Nauka</Text>
                </Header>
                <Body>
                    <Separator bordered>
                        <Text>PIERWSZA POMOC</Text>
                    </Separator>
                    <List>
                        <ListItem>
                            <Content>
                                <TouchableOpacity style={styles.button}>
                                    <Image src = {{uri: pic}} style={{height: 200, width: null, flex: 1}}/>
                                </TouchableOpacity>
                                <Text>NAZWA_LEKCJI</Text>
                                <Button rounded iconLeft dark>
                                    <Icon name="home"/>
                                    <Text>Start</Text>
                                </Button>
                            </Content>  
                            <Content>
                                <TouchableOpacity style={styles.button}>
                                    <Image src = {{uri: pic}} style={{height: 200, width: null, flex: 1}}/>
                                </TouchableOpacity><Text>NAZWA_LEKCJI</Text>
                                <Button rounded iconLeft dark>
                                    <Icon name="home"/>
                                    <Text>Start</Text>
                                </Button>
                            </Content>
                        </ListItem>
                    </List>
                    <Separator bordered>
                        <Text>SURVIVAL KIT</Text>
                    </Separator>
                    <ListItem>
                            <Content>
                                <TouchableOpacity style={styles.button}>
                                    <Image src = {{uri: pic}} style={{height: 200, width: null, flex: 1}}/>
                                </TouchableOpacity><Text>NAZWA_LEKCJI</Text>
                                <Button rounded iconLeft dark>
                                    <Icon name="home"/>
                                    <Text>Start</Text>
                                </Button>
                            </Content>  
                            <Content>
                                <TouchableOpacity style={styles.button}>
                                    <Image src = {{uri: pic}} style={{height: 200, width: null, flex: 1}}/>
                                </TouchableOpacity><Text>NAZWA_LEKCJI</Text>
                                <Button rounded iconLeft dark>
                                    <Icon name="home"/>
                                    <Text>Start</Text>
                                </Button>
                            </Content>
                        </ListItem>
                    <Separator bordered>
                        <Text>AUTO EDC</Text>
                    </Separator>
                    <ListItem>
                            <Content>
                                <TouchableOpacity style={styles.button}>
                                    <Image src = {{uri: pic}} style={{height: 200, width: null, flex: 1}}/>
                                </TouchableOpacity><Text>NAZWA_LEKCJI</Text>
                                <Button rounded iconLeft dark>
                                    <Icon name="home"/>
                                    <Text>Start</Text>
                                </Button>
                            </Content>  
                            <Content>
                                <TouchableOpacity style={styles.button}>
                                    <Image src = {{uri: pic}} style={{height: 200, width: null, flex: 1}}/>
                                </TouchableOpacity><Text>NAZWA_LEKCJI</Text>
                                <Button rounded iconLeft dark>
                                    <Icon name="home"/>
                                    <Text>Start</Text>
                                </Button>
                            </Content>
                        </ListItem>
                </Body>
                <Footer>
                    
                </Footer>
            </Container>
        );

    }
}

export default Learn;