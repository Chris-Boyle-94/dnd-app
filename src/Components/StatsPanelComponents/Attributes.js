const Attributes = () => {

    const attributeLabels = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']

    return (
        <div className='Attributes'>
            {attributeLabels.map(attr => {
                const className = `Attributes__${attr.slice(0,3,0)}`
                const mod = `Attributes__${attr.slice(0,3,0)}__mod`
                const val = `Attributes__${attr.slice(0,3,0)}__val`

                return (
                    <div className={className} key={attr}>
                        <h3>{attr.toLocaleUpperCase()}</h3>
                        <p className={mod}>Modifier: </p>
                        <p className={val}>Value: </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Attributes