
import './App.css';

function App() {
  return (
    <div className="App">
       <div className="parent"> 
       
       <PriceTag
        Free="FREE"
        symbolDollor="$0"
        month="/month"
        symbol1="✔️"
        symbol2="✔️"
        symbol3="✔️"
        symbol4="✔️"
        symbol5="❌"
        symbol6="❌"
        symbol7="❌"
        symbol8="❌"
        para1="Single User"
        para2="5GB Storage"
        para3="Unlimited Public Project"
        para4="Community Access"
        para5="Unlimited Private Projects"
        para6="Dedicated Phone Support"
        para7="Free Subdomain"
        para8="Monthly Status Reports"
        name1 ="color-gray"
        name2 ="color-gray"
        name3 ="color-gray"
        name4 ="color-gray"
      />

      <PriceTag
        Free="FREE"
        symbolDollor="$9"
        month="/month"
        symbol1="✔️"
        symbol2="✔️"
        symbol3="✔️"
        symbol4="✔️"
        symbol5="✔️"
        symbol6="✔️"
        symbol7="✔️"
        symbol8="❌"
        para1="Single User"
        para2="5GB Storage"
        para3="Unlimited Public Project"
        para4="Community Access"
        para5="Unlimited Private Projects"
        para6="Dedicated Phone Support"
        para7="Free Subdomain"
        para8="Monthly Status Reports"
        name4 ="color-gray"
      />

      <PriceTag
        Free="FREE"
        symbolDollor="$49"
        month="/month"
        symbol1="✔️"
        symbol2="✔️"
        symbol3="✔️"
        symbol4="✔️"
        symbol5="✔️"
        symbol6="✔️"
        symbol7="✔️"
        symbol8="✔️"
        para1="Single User"
        para2="5GB Storage"
        para3="Unlimited Public Project"
        para4="Community Access"
        para5="Unlimited Private Projects"
        para6="Dedicated Phone Support"
        para7="Free Subdomain"
        para8="Monthly Status Reports"
      />
       
       
       
       </div>
      
    
       
    </div>
  );
}

export default App;

function PriceTag(props) {
  return (
    // <div className="parent">
      <div className="child">
        <p className='top-content'>{props.Free}</p>
        <p className='top-content2'>
          <span className='sym-dollor'>{props.symbolDollor}</span>
          {props.month}
        </p>
        <hr />
        <p>
          <span>{props.symbol1}</span>
          {props.para1}
        </p>
        <p>
          <span>{props.symbol2}</span>
          {props.para2}
        </p>
        <p>
          <span>{props.symbol3}</span>
          {props.para3}
        </p>
        <p>
          <span>{props.symbol4}</span>
          {props.para4}
        </p>

        <p className={props.name1}>
          <span>{props.symbol5}</span>
          {props.para5}
        </p>
        <p className={props.name2}>
          <span>{props.symbol6}</span>
          {props.para6}
        </p>
        <p className={props.name3}>
          <span>{props.symbol7}</span>
          {props.para7}
        </p>
        <p className={props.name4}>
          <span>{props.symbol8} {props.para8}</span>
        </p>

        <button className={props.btn}>Button</button>
      </div>
    // </div>
  );
}
