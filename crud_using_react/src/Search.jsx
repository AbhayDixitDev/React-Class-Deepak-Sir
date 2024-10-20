import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table'
const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const api = "http://localhost:4000/userdata";

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const response = await axios.get(api);
                setSearchResults(response.data);
            } catch (error) {
                console.error("Error fetching initial data:", error);
            }
        };
        fetchInitialData();
    }, []);

    const handleSearch = async () => {
            const response = await axios(`${api}`); 
            const filteredResults = response.data.filter((item) => {
                return item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       item.phone.toLowerCase().includes(searchTerm.toLowerCase())
            });
            setSearchResults(filteredResults);
        } 
    return (
        <Container>
            <h2>Search Users</h2>
            <input
                type="text"
                value={searchTerm} onKeyUp={handleSearch}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter search term"
            />
            <button onClick={handleSearch}>Search</button>
            {searchResults.length > 0 ? (
                
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr  style={{border:"1px solid black"}}>
                            <th  style={{border:"1px solid black"}}>ID</th>
                            <th  style={{border:"1px solid black"}}>Name</th>
                            <th  style={{border:"1px solid black"}}>Email</th>
                            <th  style={{border:"1px solid black"}}>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResults.map((user) => (
                            <tr key={user.id}  style={{border:"1px solid black"}}>
                                <td  style={{border:"1px solid black"}}>{user.id}</td>
                                <td  style={{border:"1px solid black"}}>{user.name}</td>
                                <td  style={{border:"1px solid black"}}>{user.email}</td>
                                <td  style={{border:"1px solid black"}}>{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>No results found</p>
            )}
        </Container>
    )
}

export default Search;