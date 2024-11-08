const express=require('express')
const fs=require('fs')
const app = express()
app.use(express.json())

app.post('/book',(req,resp)=>{
    const book=req.body
    fs.writeFile('new.json',JSON.stringify(book),(error)=>
    {
        if(error)
        {
            console.log(error)
            resp.status(500).send('Error writing to file')
        }
        else
        {
            resp.status(201).send('Book added successfully')
        }
    })    
})

app.get('/read',(req,resp)=>{
    fs.readFile('new.json',(err,data)=>
        {
        if (err) {
            console.log(err)
            resp.status(500).send('Error reading file')
        }
        else 
        {
            resp.status(201).send('new.json')       }
            
        })
    })

    app.delete('/delet', (req, resp) => {
        
        fs.unlink(filePath, (error) => {
            if (error) {
                console.log(error);
                resp.status(500).send('Error deleting the file');
            } else {
                resp.status(200).send('File deleted successfully');
            }
        });
    });


    app.put('/put', (req, resp) => {
        const updatedBook = req.body;
    
        fs.writeFile('new.json', JSON.stringify(updatedBook), (error) => {
            if (error) {
                console.log(error);
                resp.status(500).send('Error updating the file');
            } else {
                resp.status(200).send('File updated successfully');
            }
        });
    });
    
    

app.listen(3000,(req,resp)=>{
    console.log('Server is running on port 3000')
})

