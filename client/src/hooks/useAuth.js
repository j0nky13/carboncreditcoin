// // // src/hooks/useAuth.js
// // import { auth } from "../lib/firebase";
// // import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
// // import { useEffect, useState } from "react";



// // export const useAuth = () => {
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const unsub = onAuthStateChanged(auth, (u) => setUser(u));
// //     return () => unsub();
// //   }, []);

// //   const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
// //   const logout = () => signOut(auth);

// //   return { user, login, logout };
// // };

// // useEffect(() => {
// //   if (user) {
// //     console.log('Logged in user:', user);
// //   } else {
// //     console.log('No user logged in');
// //   }
// // }, [user]);

// import { auth } from "../lib/firebase";
// import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
// import { useEffect, useState } from "react";

// export const useAuth = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (u) => {
//       setUser(u);
//       if (u) {
//         console.log('Logged in user:', u);
//       } else {
//         console.log('No user logged in');
//       }
//     });
//     return () => unsub();
//   }, []);

//   const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
//   const logout = () => signOut(auth);

//   return { user, login, logout };
// };


import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        console.log('Logged in user:', currentUser);
      } else {
        console.log('No user logged in');
      }
    });

    return () => unsubscribe();
  }, []);

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  return { user, login, logout };
};