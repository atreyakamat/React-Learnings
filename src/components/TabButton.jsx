export default function TabButton({children /* this name is upto you*/, isSelected, ...props}) {
    // document.querySelector('menu').addEventListener('click', (event) => {
    // }); --> usinn in normal js for button
    //in react its done in a diff way;
    return( <li>
    <button className={isSelected ? "active" : ""} {...props}>{children}</button>
    </li>
    );
}