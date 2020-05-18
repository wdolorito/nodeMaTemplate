# Node + Materializecss framework template

### This is a simple template for getting up and running with [Materializecss](http://archives.materializecss.com/0.100.2/)</a>

Built on [nodejs](https://nodejs.org/en/) and [expressjs](https://expressjs.com/) v4.17.1

404 error asset from [https://unsplash.com/](https://unsplash.com) by [Rémi Jacquaint
](https://unsplash.com/@jack_1?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge)


| Software              | Version | Documentation                                                                                       |
| :-------------------: | :-----: | :-------------------------------------------------------------------------------------------------: |
| jQuery                | 3.2.1   | [https://api.jquery.com/](https://api.jquery.com/)                                                  |
| Materializecss        | 0.100.2 | [https://get.foundation/sites/docs/](https://get.foundation/sites/docs/)                            |
| Google Material Icons | -       | [https://google.github.io/material-design-icons/](https://google.github.io/material-design-icons/)  |

### Using this template

Copy `index.html` to another file in `views`, for instance `anotherfile.html`.  Then add another route in `routes.js`:

```sh
router.get('/somelocation', function(req, res) {
  res.sendFile(views + '/anotherfile.html')
})
```
