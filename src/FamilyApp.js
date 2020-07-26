import React from 'react'
import { CardList } from './card-list/card-list.component'
import './App.css';
import { SearchBox } from './seach-box/search-box.component';
class FamilyApp extends React.Component{

    constructor() {
        super()
        this.state = {
            family : [
                {
                    id : 1,
                    name : 'Senthilvel',
                    Relationship : 'Husbhand'

                },
                {
                    id : 2,
                    name : 'Arathy',
                    Relationship : 'Wife'
                },
                {
                    id : 3,
                    name : 'Sujay',
                    Relationship : 'Son'
                },
                {
                    id : 4,
                    name : 'Charu',
                    Relationship : 'Daughter'
                },
                {
                    id : 5,
                    name : 'Muthu',
                    Relationship : 'Friend'
                }
            ],
            searchField : ''
        }
    }
    
    render() {
        const { family, searchField } = this.state
        const filteredFamily = family.filter(eachMember => 
            eachMember.name.toLowerCase().includes(searchField.toLowerCase()))
        return (
           
            <div className="App">
                
                <SearchBox  
                    placeholder = 'Search Family' 
                    handleChange = {e => this.setState({searchField :  e.target.value})} />
                <CardList abcd = {filteredFamily}  />
                
            </div>
        )
    }


}
export default FamilyApp;