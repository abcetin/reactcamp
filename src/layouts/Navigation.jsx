import React, {useState} from 'react'
import CartSummary from './CartSummary'
import {  Container,  Menu } from 'semantic-ui-react'
import SingedOut from './SingedOut'
import SingedIn from './SingedIn'
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navigation() {
    const { cartItems } = useSelector(state => state.cart)
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history =  useHistory()

    function handleSignOut(params) {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return (
        <div>

            <Menu inverted fixed="top" >
                <Container>
                    <Menu.Item as={NavLink} to="/products"
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />

                    <Menu.Menu position='right'>
                        {cartItems.length>0&&<CartSummary/>}
                        {isAuthenticated?<SingedIn signOut = {handleSignOut} />:<SingedOut signIn={handleSignIn}/>}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
