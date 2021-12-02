import './Header.css'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const Header = () => {
    return (
        <div className="header">
            <div className="left">
                <figure>
                    <img className="logo" src="https://lh3.googleusercontent.com/proxy/l71Z5pAKFvx8LeikRIkfJKe9Jxf9yk_Sfsg6L2dxdBSJgPAnhqnaIM0f0YKsW2yHlw7M0QJK1oE35vTiBe52vrQlNf5d4T4WO_xLSrlc_Ub4dr9TC8wtfwnS5bbnEdf4" alt="" />
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
