import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {

  let data;

  // Temporary
  const amount = 78

  switch(type){
    case "user":
        data={
            title: "USERS",
            isMoney: false,
            coef: true,
            diff: 10,
            link: "See all users",
            icon: (
                <PersonIcon
                    className='icon'
                    style={{
                        color: 'crimson',
                        backgroundColor: 'rgb(255, 0, 0, 0.2)'
                    }}
                />
            )
        }
        break;
    case "order":
        data={
            title: "ORDERS",
            isMoney: false,
            coef: false,
            diff: -40,
            link: "View all orders",
            icon: (
                <LocalGroceryStoreOutlinedIcon
                    className='icon'
                    style={{
                        color: 'goldenrod',
                        backgroundColor: 'rgb(218, 165, 32, 0.2)'
                    }}
                />
            )
        }
        break;
    case "earning":
        data={
            title: "EARNINGS",
            isMoney: true,
            coef: true,
            diff: 28,
            link: "View net earnings",
            icon: (
                <MonetizationOnOutlinedIcon
                    className='icon'
                    style={{
                        color: 'green',
                        backgroundColor: 'rgb(0, 128, 0, 0.2)'
                    }}
                />
            )
        }
        break;
    case "balance":
        data={
            title: "BALANCE",
            isMoney: true,
            coef: false,
            diff: -19,
            link: "See details",
            icon: (
                <AccountBalanceWalletOutlinedIcon
                    className='icon'
                    style={{
                        color: 'purple',
                        backgroundColor: 'rgb(128, 0, 128, 0.2)'
                    }}
                />
            )
        }
    break;
    default:
        break;
  }

  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>
                { data.title }
            </span>
            <span className='counter'>
                { data.isMoney && "$" }{ amount }{ data.isMoney && "k" }
            </span>
            <span className='link'>
                { data.link }
            </span>
        </div>
        <div className='right'>
            <div className={data.coef === false ? "percentage negative" : "percentage positive"}>
                <KeyboardArrowUpOutlinedIcon className='rotate'/>
                    {data.coef === false ? null : "+"}{ data.diff }%
            </div>
            { data.icon }
        </div>
    </div>
  )
}

export default Widget
