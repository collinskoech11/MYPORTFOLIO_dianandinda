import React, { Component } from 'react'

export class MyWork extends Component {
    render() {
        return (
            <div>
            <h1>My Projects</h1>
            <div class="row" >
            <article class="col-6 col-12-xsmall work-item">
                <a href="images copy/mywork/mywork1.jpeg" class="image fit thumb"><img src="images copy/mywork/mywork1.jpeg" alt="" /></a>
                <h3>Mochoice-website: An e-commerce site</h3>
           <button type="button" class="btn btn-secondary">view website</button>
           <button type="button" class="btn btn-secondary">view code</button>
            </article>
            <article class="col-6 col-12-xsmall work-item">
                <a href="images copy/mywork/mywork4.jpeg" class="image fit thumb"><img src="images copy/mywork/mywork4.jpeg" alt="" /></a>
                <h3>Fundis-website: A repair and fixtures site</h3>
                <button type="button" class="btn btn-secondary">view website</button>
                <button type="button" class="btn btn-secondary">view code</button>
            </article>
            <article class="col-6 col-12-xsmall work-item">
                <a href="images copy/mywork/mywork2.jpg" class="image fit thumb"><img src="images copy/mywork/mywork2.jpg" alt="" /></a>
                <h3>Gikomba.Online: A thift e-commerce site</h3>
                <button type="button" class="btn btn-secondary">view website</button>
                <button type="button" class="btn btn-secondary">view code</button>
            </article>
            <article class="col-6 col-12-xsmall work-item">
                <a href="images copy/mywork/amie.jpeg" class="image fit thumb"><img src="images copy/mywork/amie.jpeg" alt="" /></a>
                <h3>Amie Foundation: A charity organisation</h3>
               <button type="button" class="btn btn-secondary">view website</button>
            <button type="button" class="btn btn-secondary">view code</button>
            </article>
            </div>
            </div>
        )
    }
}

export default MyWork
