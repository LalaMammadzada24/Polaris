import React from 'react'

const MentorCard = () => {
  return (
    <>
    <div className="card border-0">
                    <div className="row g-0">
                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <img src='https://s3-alpha-sig.figma.com/img/6140/fad6/d9bdd7f9a2e23fb608060567b7c77a06?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cj-sYrEO1kLwxbUgNjoufc~R5E1QaPtGe1GG3vJ4~1agMpkB~NZaq0qsmBuHVGoWJyIgeJPeqgpI7k5MOTm2KY2UlD5xXaVnWuoCGwtM~qyXu1KIJ~5xAbBCoSyn5WMxLm9FeaFlvdDjl~xOD~AVRzYg~BPOHF1Nu3Z2ZT00rxXILMYIRoXqMtzoDx53FEry9RRkjOTfIaFcCYwPvQYfQ6jC8~Dfz7FHsdJaxc-Xr4FnZdZinp0jbMYXk6dOzQTeUvmOEwNaO1aKl0X18A5uM83fkQNGKKeFl6sNQDP~FY0tuIfY8vcrmAZAOVc7PEW6Ly14nM2j8VDpJTG7b2btYw__' className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-sm-9 col-md-9 col-lg-9">
                            <div className="card-body">
                                <h5 className="card-title mb-0">Esther Howard</h5>
                                <p className="card-text mt-0">Developer Mentor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-0">
                        <span className='lorem-ipsum rounded-pill'>lorem ipsum</span>
                        <span className='lorem rounded-pill'>lorem</span>
                        <span className='ipsum rounded-pill'>ipsum</span>
                    </div>
                </div>
    </>
  )
}

export default MentorCard