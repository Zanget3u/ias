class TemplateEngine
{
    constructor()
    {
        this.getTemplate();
    }

    getTemplate()
    {
        fetch('/template', 
        {
            method: 'GET',
            cache: 'no-cache'
        })
        .then((result) => result.text())
        .then((data) => 
        {      
            this.template = data;            
        }) 
    }

    showPersonList(data)
    {
        let output = '';
        let length = Object.keys(data).length;
        let max_val = Object.keys(data)[length - 1];    

        for(let i = 1; i <= max_val; i++)
        {
            if(data[i])
            {
                let template_s = new String(this.template);
                template_s = template_s.replace("data0", i);
                template_s = template_s.replace("data1", data[i].vorname);
                template_s = template_s.replace("data2", data[i].name);
                template_s = template_s.replace("data3", data[i].funktion);
                template_s = template_s.replace("data4", "");

                output += 
                `  
                    ${template_s}
                `;
            }    
        }
        return output;
    }

    showSinglePerson(data, ID)
    {
        let output = '';
        let template_s = new String(this.template);

        template_s = template_s.replace("data0", ID);
        template_s = template_s.replace("data1", data.vorname);
        template_s = template_s.replace("data2", data.name);
        template_s = template_s.replace("data3", data.funktion);
        template_s = template_s.replace("data4", "");

        output += 
        `  
            ${template_s}
        `;
        return output;
    }
}

templateEngine = new TemplateEngine();