from flask import render_template,flash,url_for
from . import english
from .forms import NameForm
import networkx as nx
from nltk.corpus import wordnet
from app.models import Books,BooksEdge


@english.route('/corpus/<d>', methods=['GET', 'POST'])
def corpus(d):
    form = NameForm()
    words=""
    #判断选项为c  explanation examples
    c = form.category.data
    global ans
    ans = []
    global nodes
    nodes=[]
    global edges
    edges=[]
    form.name.data = d
    flash(form.category.data)
    #if form.validate_on_submit():
    if True:
        d = form.name.data
        words = wordnet.synsets('' + d + '')
        if not words:
            flash("not found!")
            ans = ""
        else:
            flash("found it!")
            if c == 'a':#explanation
                for wd in words:
                    ans.append([wd.definition(), wd.examples()])

            elif c == 'b':#examples
                for wd in words:
                    ans.append([wd.definition(), wd.lemma_names()])
                nodes = [[d, 'wd']]
                edges = []
                x = 0
                count = 1
                for item in ans:
                    x = 0
                    y = count
                    nodes.append([item[0], 'def'])
                    edges.append([x, y])
                    count += 1
                    x = y
                    for i in item[1]:
                        if i != d:
                            nodes.append([i,'wd'])
                            y = count
                            count+=1
                            edges.append([x,y])

    return render_template('english/corpus.html', data=ans, edge=edges, node=nodes, type=c, form=form)


@english.route('/cor', methods=['GET', 'POST'])
def cor():
    form = NameForm()
    c = form.category.data
    global ans
    ans = []
    global nodes
    nodes=[]
    global edges
    edges=[]
    flash(form.category.data)
    if form.validate_on_submit():
        d = form.name.data
        words = wordnet.synsets('' + d + '')
        if not words:
            flash("not found!")
            ans = ""
        else:
            flash("found it!")
            if c == 'a':#explanation
                for wd in words:
                    ans.append([wd.definition(), wd.examples()])

            elif c == 'b':#examples
                for wd in words:
                    ans.append([wd.definition(), wd.lemma_names()])
                nodes = [[d, 'wd']]
                edges = []
                x = 0
                count = 1
                for item in ans:
                    x = 0
                    y = count
                    nodes.append([item[0], 'def'])
                    edges.append([x, y])
                    count += 1
                    x = y
                    for i in item[1]:
                        if i != d:
                            nodes.append([i,'wd'])
                            y = count
                            count+=1
                            edges.append([x,y])

    return render_template('english/corpus.html', data=ans, edge=edges, node=nodes, type=c, form=form)


@english.route('/usa', methods=['GET', 'POST'])
def usa():
    return render_template('english/usa.html')


@english.route('/usa1', methods=['GET', 'POST'])
def usa1():
    books = Books().query.all()
    edge = BooksEdge().query.all()
    return render_template('english/usa1.html',books=books,edge=edge)


@english.route('/net', methods=['GET', 'POST'])
def net():
    G = nx.read_gml('C:/Users/ljrIr/PycharmProjects/SOCIAL/app/static/netedge359.gml')
    remove_nodes = []
    return render_template('english/net.html', data=0, node1="", node2="",sNodes = G.nodes())


@english.route('/netroute/<ids>', methods=['GET', 'POST'])
def netroute(ids):
    idL = ids.split("_",1)
    n1 = idL[0]
    n2 = idL[1]
    G = nx.read_gml('C:/Users/ljrIr/PycharmProjects/SOCIAL/app/static/netedge359.gml')
    global node1
    global node2
    for node in G.nodes():
        # print(node)
        if node == n1:
            node1= node
        if node == n2:
            node2 = node
    center=nx.degree_centrality(G)
    c1 = center[node1]
    c2 = center[node2]
    aver=nx.average_clustering(G)
    pr=nx.clustering(G)
    pr1=pr[node1]
    pr2=pr[node2]
    try:
        lenth = len(nx.dijkstra_path(G, node1, node2))
        result_graph = G.subgraph(nx.shortest_path(G, node1, node2));
        flash("found it!")
    except:
        lenth= - 1
        result_graph = G;
        flash("not found!")
    return render_template('english/net.html',data=lenth,node1=node1,node2=node2,aver=aver,pr=pr,pr1=pr1,pr2=pr2,
                           center=center,c1=c1,c2=c2,flag = 1,sNodes = result_graph.nodes())