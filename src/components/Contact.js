export const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-2xl p-4">Contact</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="Name" />
                <input type="text" className="border border-black p-2 m-2" placeholder="message sent" />
                <button className="bg-green-500 text-white p-3 m-3 rounded-lg">Submit</button>
            </form>
        </div>
    )
}
