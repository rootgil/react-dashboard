import './Featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Featured = () => {
  return (
    <div className='featured'>
        <div className='top'>
          <h1 className='title'>Total Revenue</h1>
          <MoreVertOutlinedIcon fontSize='small'/>
        </div>
        <div className='bottom'>
          <div className='featuredChart'>
            <CircularProgressbar
              value={70}
              text="70%"
              strokeWidth={5}
              styles={{
                path: {
                  stroke: '#7451f8'
                },
                text: {
                  fill: '#7451f8'
                }
              }}/>
          </div>
          <p className='title'>Total sales made today</p>
          <p className='amount'>$420</p>
          <p className='desc'>
            Previous transactions processing. Last payments may not br included
          </p>
          <div className='summary'>
            <div className='item'>
              <div className='itemTitle'>Target</div>
              <div className='itemResult positive'>
                <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                <div className='itemResultAmount'>$12.4k</div>
              </div>
            </div>
            <div className='item'>
              <div className='itemTitle'>Last week</div>
              <div className='itemResult negative'>
                <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                <div className='itemResultAmount'>$74.5k</div>
              </div>
            </div>
            <div className='item'>
              <div className='itemTitle'>Last Month</div>
              <div className='itemResult positive'>
                <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                <div className='itemResultAmount'>$82.9k</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Featured