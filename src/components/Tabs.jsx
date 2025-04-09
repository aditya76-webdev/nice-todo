
export function Tabs(props){
    const {todos,selectedTab, setSelectedTab} = props
    // const setSelectedTab = setSelectedTab
    // console.log(todos,selectedTab,setSelectedTab,"i m from tabs")
    // console.log(setSelectedTab,"i m from tabs")
    const tabs = ['All','Open','Completed'];

    return(
        <nav>
            {tabs.map((tab,tabIndex)=>{
                const numOfTasks = tab=='All'?todos.length:tab=='Open'?todos.filter(val=>!val.complete).length:todos.filter(val=>val.complete).length
            return (
                <button key={tabIndex} onClick={()=>{
                    setSelectedTab(tab)
                    console.log(tab,"Hello tabs")
                }} className={"tab-button " + (tab===selectedTab? 'tab-selected':' ')}>
                    <h4>{tab} <span>({numOfTasks})</span></h4>
                </button>
            )})}
            <hr/>
        </nav>
    )
}


/*day-1:-
humne apne project ki design dekhi aur usme hume ye dekhne ko mila ki hume tabs banane padenge All, open, completed ke

1). bruteforce way then optimized way:-
agar hum chahte to hum all , open, completed  teeno ke liye alag alag likh sakte the par hume pata hai react is for not repeating things again and again to humne ye dekha ki hum same hi chiz likhte baar baar to isse accha aisa karte hai ki inn teeno ko ek array mai store kar dete hai 
to humne all, open , completed ko ek array mai store kar diya and humne ise jo html dena hai usse map kar diya bole to javascript ki array  ko html se map kar diya jisse same html saare array elements par lag jayegi aur isse hume alag alag teeno ke liye button nahi banani padegi

to humne ye kiya ki tabs array banayi aur use map kar diya html se isse array ke saare elements mai same chiz lag gayi
*/
