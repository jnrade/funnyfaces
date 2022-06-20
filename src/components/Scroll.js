// Function to apply fixed scrolling to title & search bar
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid orange', height: '700px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;