import './Header.css'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const Header = () => {
    return (
        <div className="header">
            <div className="left">
                <figure>
                   <a href="#"><img className="logo" src="https://www.sodapdf.com/blog/wp-content/uploads/2019/07/1-image-placeholder-how-to-wireframe-pdf.png" alt="" /></a>
                </figure>
                <h1>Title</h1>
            </div>
            <div className="inputs">
                <div className="input">
                    <p>Saldo Inicial:</p>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <FormControl aria-label="Amount (to the nearest dollar)" />
                    </InputGroup>
                </div>
                <div className="input">
                    <p>Saldo Final:</p>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <FormControl aria-label="Amount (to the nearest dollar)" />
                    </InputGroup>
                </div>
            </div>
        </div>
    );
};

export default Header;
