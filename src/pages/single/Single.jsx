import './Single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/list/List'

function Single () {
    return (
        <div className='single'>
            <Sidebar/>
            <div className='singleContainer'>
                <Navbar/>
                <div className='top'>
                    <div className='left'>
                        <div className='editButton'>Edit</div>
                        <h1 className='title'>Information</h1>
                        <div className='item'>
                            <img
                                src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500'
                                alt='user'
                                className='itemImg'
                            />
                            <div className='details'>
                                <h1 className='itemTitle'>Jane Doe</h1>
                                <div className='detailItem'>
                                    <span className='itemKey'>Email:</span>
                                    <span className='itemValue'>janedoe@gmail.com</span>
                                </div>
                                <div className='detailItem'>
                                    <span className='itemKey'>Phone:</span>
                                    <span className='itemValue'>+1 2313 12 14</span>
                                </div>
                                <div className='detailItem'>
                                    <span className='itemKey'>Adress:</span>
                                    <span className='itemValue'>Elton St. 847 Garden Yd. NewYork</span>
                                </div>
                                <div className='detailItem'>
                                    <span className='itemKey'>Country:</span>
                                    <span className='itemValue'>USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <Chart aspect={4 / 1} title="User Spending ( Last 6 Months)"/>
                    </div>
                </div>
                <div className='bottom'>
                    <h1 className='title'>Last transaction</h1>
                    <List/>
                </div>
            </div>
        </div>
    )
}

export default Single