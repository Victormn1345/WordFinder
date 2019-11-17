from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def template_test():
    return render_template(
        'template.html', my_string="Wheeeee!", 
        my_list=[0,1,2,3,4,5], title="Home")

@app.route("/home")
def home():
    return render_template(
        'template.html', my_string="Wheeeee!", 
        my_list=[0,1,2,3,4,5], title="Home")

@app.route("/application")
def application():
    return render_template(
        'application.html', my_string="Wheeeee!", 
        my_list=[0,1,2,3,4,5], title="Application")



if __name__ == '__main__':
    #app.run(debug=True)
    app.run()