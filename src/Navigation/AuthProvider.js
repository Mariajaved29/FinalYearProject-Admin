import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password)
            .then(() => {
              alert('Signed in Successfully!')
              })
              .catch(error => {
                if (error.code === 'auth/invalid-email') {
                  alert('That email address is invalid!')
                }
                if (error.code === 'auth/invalid-email') {
                  alert('That email address is invalid!')
                }
                if (error.code === 'auth/user-not-found') {
                  alert('User Not found!')
                }
              });
            } 
            catch (e) {
              console.log(e);
              alert('Invalid user email or password');
            }
         },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password)
            // .then(() => {
            //   console.log('User account created & signed in!');
            //   alert('User account created & signed in!')
            //   })
            //   .catch(error => {
            //     if (error.code === 'auth/email-already-in-use') {
            //       console.log('That email address is already in use!');
            //       alert('That email address is already in use!')
            //     }

            //     if (error.code === 'auth/invalid-email') {
            //       console.log('That email address is invalid!');
            //       alert('That email address is invalid!')
            //     }
            //     console.error(error);
            //   });
            .then(() => {
                console.log('User account created & signed in!');
                alert('User account created & signed in!')
              //Once the user creation has happened successfully, we can add the currentUser into firestore
              //with the appropriate details.
              firestore().collection('users').doc(auth().currentUser.uid)
              .set({
                  fname: '',
                  lname: '',
                  email: email,
                  password: password,
                  createdAt: firestore.Timestamp.fromDate(new Date()),
                  userImg: null,
              })
              //ensure we catch any errors at this stage to advise us if something does go wrong
              .catch(error => {
                  console.log('Something went wrong with added user to firestore: ', error);
              })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                  console.log('That email address is already in use!');
                  alert('That email address is already in use!')
                }

                if (error.code === 'auth/invalid-email') {
                  console.log('That email address is invalid!');
                  alert('That email address is invalid!')
                }
                console.error(error);
              })
            //we need to catch the whole sign up process if it fails too.
            .catch(error => {
                console.log('Something went wrong with sign up: ', error);
            });
          } catch (e) {
            console.log(e);
            alert('Invalid Information!');
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};