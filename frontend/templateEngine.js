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

    showCategoryList(data)
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
                template_s = template_s.replace("data1", data[i].beschreibung);
                template_s = template_s.replace("data2", "");
                template_s = template_s.replace("data3", " Schweregrad: ");
                template_s = template_s.replace("data4", data[i].schweregrad);

                output += 
                `  
                    ${template_s}
                `;
            }    
        }
        return output;
    }

    showSingleCategory(data, ID)
    {
        let output = '';
        let template_s = new String(this.template);

        template_s = template_s.replace("data0", ID);
        template_s = template_s.replace("data1", data.beschreibung);
        template_s = template_s.replace("data2", "");
        template_s = template_s.replace("data3", " Schweregrad: ");
        template_s = template_s.replace("data4", data.schweregrad);

        output += 
        `  
            ${template_s}
        `;
        return output;
    }

    showReasonList(data)
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
                template_s = template_s.replace("data1", "");
                template_s = template_s.replace("data2", "");
                template_s = template_s.replace("data3", data[i].beschreibung);
                template_s = template_s.replace("data4", "");

                output += 
                `  
                    ${template_s}
                `;
            }    
        }
        return output;
    }

    showSingleReason(data, ID)
    {
        let output = '';
        let template_s = new String(this.template);

        template_s = template_s.replace("data0", ID);
        template_s = template_s.replace("data1", "");
        template_s = template_s.replace("data2", "");
        template_s = template_s.replace("data3", data.beschreibung);
        template_s = template_s.replace("data4", "");

        output += 
        `  
            ${template_s}
        `;
        return output;
    }

    showComponentList(data)
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
                template_s = template_s.replace("data1", data[i].beschreibung);
                template_s = template_s.replace("data2", "");
                template_s = template_s.replace("data3", " Projekt-ID: ");
                template_s = template_s.replace("data4", data[i].projektID);

                output += 
                `  
                    ${template_s}
                `;
            }    
        }
        return output;
    }

    showSingleComponent(data, ID)
    {
        let output = '';
        let template_s = new String(this.template);

        template_s = template_s.replace("data0", ID);
        template_s = template_s.replace("data1", data.beschreibung);
        template_s = template_s.replace("data2", "");
        template_s = template_s.replace("data3", " Projekt-ID: ");
        template_s = template_s.replace("data4", data.projektID);

        output += 
        `  
            ${template_s}
        `;
        return output;
    }

    showUnresolvedErrorList(data)
    {
        let output = '';
        let length = Object.keys(data).length;
        let max_val = Object.keys(data)[length - 1];    

        for(let i = 1; i <= max_val; i++)
        {
            if(data[i])
            {
                let index = i;
                let datum = data[index].datum;

                let mitarbeiter_ID = data[index].mitarbeiter;
                let vorname = currentEmployeeData[mitarbeiter_ID].vorname;
                let name = currentEmployeeData[mitarbeiter_ID].name;
                let mitarbeiter = vorname + " " + name;

                let komponente_ID = data[index].komponente;
                let komponente = currentComponentData[komponente_ID].beschreibung;

                let kategorie_ID = data[index].kategorie;
                let kategorie = currentCategoryData[kategorie_ID].beschreibung;

                let template_s = new String(this.template);
                template_s = template_s.replace("data0", i);
                template_s = template_s.replace("data1", mitarbeiter + " hat Fehler in ");
                template_s = template_s.replace("data2", komponente);
                template_s = template_s.replace("data3", kategorie);
                template_s = template_s.replace("data4", "(" + datum + ")");

                output += 
                `  
                    ${template_s}
                `;
            }    
        }
        return output;
    }
}

templateEngine = new TemplateEngine();