let Bottombar = {
    render: async () => {
        let view =  /*html*/`
        <footer class="footer">
            <div style="text-align:end">
                <p>
                    This is the CopyRights footer.
                </p>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Bottombar;