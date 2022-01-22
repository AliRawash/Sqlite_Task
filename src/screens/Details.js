import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Info from '../components/Info';
import { Input } from 'react-native-elements';
import { openDatabase } from "react-native-sqlite-storage";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window',);

const db = openDatabase({
    name: "notes_db",
  });

const Details = () => {

    const [showInfo, setShowInfo] = useState(false)
    const [showNotes, setShowNotes]= useState(false)
    const [note, setNote] = useState('')
    const [notes, setNotes] = useState([])

    useEffect(() => {
         createTables()
        getNotes()
    }, []);
    
    
    const createTables = () => {
        // this method to create the table to save the notes using SQlite
        db.transaction(txn => {
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))`,
            [],
            (sqlTxn, res) => {
              console.log("table created successfully");
            },
            error => {
              console.log("error on creating table " + error.message);
            },
          );
        });
    };
    
    const getNotes = () => {
        // this method to check if there are notes saved and retieved them and put it in new array 
        db.transaction(txn => {
          txn.executeSql(
            `SELECT * FROM notes ORDER BY id DESC`,
            [],
            (sqlTxn, res) => {
              console.log("notes retrieved successfully");
              let len = res.rows.length;
    
              if (len > 0) {
                let results = [];
                for (let i = 0; i < len; i++) {
                  let item = res.rows.item(i);
                  results.push({ id: item.id, name: item.name });
                }
    
                setNotes(results);
              }
            },
            error => {
              console.log("error on getting notes " + error.message);
            },
          );
        });
      };

    const addnote = () => {
          // this method check if there is note and insert it in the db
        if (!note) {
          alert("Enter your note");
          return false;
          }
          
          db.transaction(txn => {
            txn.executeSql(
              `INSERT INTO notes (name) VALUES (?)`,
              [note],
              (sqlTxn, res) => {
                console.log(`${note} note added successfully`);
                getNotes();
                setNote("");
              },
              error => {
                console.log("error on adding category " + error.message);
              },
            );
          });
    };

  
    return (
        <ScrollView>
            <View style={Styles.ImageView}>
             <Image
            source={require('../assets/printer.jpg')}
            style={Styles.image}
            />
            </View>
            
            <View style={Styles.horizontalLine} />
            
            <View style={Styles.info}>
                <View style={Styles.mainTitle}>
                    <Text style={Styles.title}> Image Info</Text>
                    <TouchableOpacity
                        onPress={()=>setShowInfo(!showInfo)}

                    >
                        <Icon
                            name={showInfo ? 'arrow-up' : 'arrow-down'}
                            size={24}
                        />
                    </TouchableOpacity>

                </View>
                {showInfo ?
                    
                    <View >
                    <Info
                                title={'Model'}
                                text={'Gt2000'}
                        />
                         <Info
                                title={'Model Name'}
                                text={'Printer HSE'}
                        />
                         <Info
                                title={'Cost'}
                                text={'120$'}
                        />
                    </View> :
                    false
                }
               

            </View>
            <View style={Styles.horizontalLine} />
            
            <View style={Styles.info}>
                <View style={Styles.mainTitle}>
                    <Text style={Styles.title}> Notes</Text>
                    <TouchableOpacity
                        onPress={()=>setShowNotes(!showNotes)}

                    >
                        <Icon
                            name={showNotes ? 'arrow-up' : 'arrow-down'}
                            size={24}
                        />
                    </TouchableOpacity>

                </View>
                {showNotes ? 
                    <View>
                          <TouchableOpacity
                            onPress={addnote}
                            style={{flexDirection:'row', alignSelf:'flex-end', marginBottom:5, marginTop:10, right:20}}

                        >
                            <Text>Save</Text>
                            <Icon2
                                name='save'
                                size={24}
                            />
                    </TouchableOpacity>

                         <Input
                            containerStyle={Styles.container}
                            inputContainerStyle={Styles.input}
                            value={note}
                            onChangeText={text => setNote(text)}
                            placeholder={'Add Note'}
                            
                        />
                         <Text style={Styles.Midieumtitle}>History notes</Text>

                      
                        
                        {notes.map((item, index) => {
                             return (
                                 <View
                                 key={item.id}
                                     style={Styles.notes}>
                                  <Text style={{ marginRight: 9 }}> {item.id} </Text>
                                  <Text>{item.name}</Text>
                                </View>
                              );
                        })}
                    </View>
                    :
                    false

                }

                </View>

      </ScrollView>
  );
}

export default Details;
const Styles = StyleSheet.create({
    ImageView: {
        width: 250,
        height: 200,
        borderRadius: 50,
        alignSelf: 'center',
        alignItems:'center',
        marginTop: 20,
        backgroundColor: '#fff',
        elevation: 10
        
    },
    image: {
        width: '90%',
        height: '80%',
        resizeMode: 'contain',
        marginTop:20
    },
    horizontalLine:{
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        marginVertical: 20,
        marginHorizontal:25
    },
    info: {
        marginHorizontal:20
        
    },
    mainTitle: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        alignSelf: 'flex-start',
    },
    Midieumtitle: {
        fontSize: 20,
        alignSelf: 'flex-start',
        marginBottom:5
    },
    container: {
        borderColor: '#000',
        width: SCREEN_WIDTH - 50,
        alignSelf: 'center',
      },
      input: {
        borderWidth: 1,
          borderRadius: 25,
          backgroundColor: '#fff',
          elevation: 10
        
    },
      notes:{
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
            borderColor: "#ddd",
        backgroundColor:'#fff'
      }

})