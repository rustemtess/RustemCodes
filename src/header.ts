const items : Array<Object> = [
    {
        title: 'Me'
    },
    {
        title: 'About',
        func: `view('about', true)`
    },
    {
        title: 'Skills',
        func: `view('skills', true)`
    },
    {
        title: 'Projects',
        func: `view('project', true)`
    }
]

const header: any = () => {
    items.map( item => 
        // @ts-ignore
        addElement('items', `<a onclick="${item.func}">${item.title}</a>`, false)
    )
}

const showMenu: any = () => {
    const menuBlock = getID('items').style.display
    if(menuBlock === "none") getID('items').style.display = "flex"
    else getID('items').style.display = "none"
}

