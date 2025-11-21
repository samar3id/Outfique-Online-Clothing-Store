
    import React from 'react';
     import { createRoot } from 'react-dom/client';
     import App from './App';  // ده موجود بالفعل
     import CartProvider from './context/CartContext';  // ده موجود بالفعل
     import AuthProvider from './context/AuthContext';  // أضف ده (استيراد AuthProvider)
     import './styles/App.css';  // ده موجود بالفعل
     import 'bootstrap/dist/css/bootstrap.min.css';  // ده موجود بالفعل
     const container = document.getElementById('root');
     const root = createRoot(container); 
     root.render(
         <AuthProvider>
             <CartProvider>
                 <App />
             </CartProvider>
         </AuthProvider>
     );
     