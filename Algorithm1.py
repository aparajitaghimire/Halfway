#!/usr/bin/env python
# coding: utf-8

# In[53]:


scifi=[0]
fantasy=[0]
action=[0]
adventure=[0]
animation=[0]
family=[0]
comedy=[0]
documentary=[0]
history=[0]
crime=[0]
mystery=[0]
war=[0]
drama=[0]
horror=[0]
thriller=[0]
romance=[0]

first={"SCIENCE FICTION":scifi,
       "FANTASY":fantasy,
       "ACTION":action,
       "ADVENTURE":adventure
      }

second={"ANIMATION":animation,
        "FAMILY":family,
        "COMEDY":comedy
       }

third={"DOCUMENTARY":documentary,
       "HISTORY":history,
       "WAR":war
      }

fourth={"CRIME":crime,
        "MYSTERY":mystery,
        "WAR":war,
        "DRAMA":drama
       }

fifth={"HORROR":horror,
       "THRILLER":thriller
      }

sixth={"ROMANCE":romance,
       "DRAMA":drama,
       "COMEDY":comedy
      }

hello_arr = [first,second,third,fourth,fifth,sixth]
           


# In[54]:


def count_genres(arr):
    
    for i in range(len(arr)):
        arr[i]=arr[i].upper()
    
    scifi[0]=arr.count("SCIENCE FICTION")
    fantasy[0]=arr.count("FANTASY")
    action[0]=arr.count("ACTION")
    adventure[0]=arr.count("ADVENTURE")
    animation[0]=arr.count("ANIMATION")
    family[0]=arr.count("FAMILY")
    comedy[0]=arr.count("COMEDY")
    documentary[0]=arr.count("DOCUMENTARY")
    history[0]=arr.count("HISTORY")
    crime[0]=arr.count("CRIME")
    mystery[0]=arr.count("MYSTERY")
    war[0]=arr.count("WAR")
    drama[0]=arr.count("DRAMA")
    horror[0]=arr.count("HORROR")
    thriller[0]=arr.count("THRILLER")
    romance[0]=arr.count("ROMANCE")
    
    return True
    
    
    

def count_groups():
    
    count1= scifi[0] + fantasy[0] + action[0] + adventure[0] 
    count2= animation[0] + family[0] + comedy[0]
    count3= documentary[0] + history[0]
    count4= crime[0] + mystery[0] + war[0] + drama[0]
    count5= horror[0] + thriller[0]
    count6= romance[0] + drama[0] + comedy[0]
    sample_array=[count1,count2,count3,count4,count5,count6]
    
    return sample_array
    
    


# In[55]:


def equal_count(eq_list):
 
    main_genres=[]
    
    for i in eq_list:
        aniket = hello_arr[i] #dictionary
    
        farhan=[]
        for i in aniket.keys():
            
            farhan.append(aniket[i][0]) #list of the dictionary values
        
        
        for item in aniket.items():
            if item[1][0] == max(farhan):
                main_genres.append(item[0])  #the name of the genre that is greatest within the group
        
        
    return list(set(main_genres))
        
    
    
    

        
            
        


# In[56]:


def final_decision(sample_array):
    
    max=sample_array[0]
    
    
    for i in range(1,len(sample_array)):
        
        if max < sample_array[i]:
            max = sample_array[i]
            
    eq_list=[]
    for i in range(len(sample_array)):
        if sample_array[i]==max:
            eq_list.append(i)
    
    if len(eq_list)>1:
        return equal_count(eq_list)
    
    final_list=[]
    andy=sample_array.index(max)
    total=sum(count_groups())# total votes
    
    if sample_array[andy]>total/2: #  if number of votes in this group is greater than 50% 
        print("The categories in this group were selected by more than you 50% of the group")
        for i in hello_arr[andy].keys():
            final_list.append(i)
        return final_list
    else:
        
        return get_bestgenres(sample_array)
        
        
            
    


# In[57]:


def get_bestgenres(sample_array):
    all_counts = []
    final_list=[] #return list
    for x in sample_array:
        all_counts.append(x) 
    all_counts.sort(reverse = True)  # will have sorted sample_array in descending order
    
    for i in range(2): #top 2
        max=0 # new max is 0 every loop
        andy=sample_array.index(all_counts[i]) #andy is the index of the first or second greatest value in the sample_array
        maxgenre=0
        
        for key in hello_arr[andy].keys(): # loops through dict of andy
            
            if hello_arr[andy][key][0]>max: #if the value is greater than max 
                max=hello_arr[andy][key][0] #then max takes on its value
                maxgenre=key  #and max genre takes the name of the genre
    
        if type(maxgenre)==str:
            final_list.append(maxgenre)
    
            
    return final_list
            
    


# In[58]:


def main():
    arr=[]
    done="y"
    while done=="y":
        arr.append(input("Type favorite genre (wrong inputs will not be considered as a vote): "))
        done=input("Are there more people (y/n)? ")
        if done!="y" and done!="n":
            done=input("Please try again (y/n)")
    
    if len(arr)<=4:
        for i in range(len(arr)):
            arr[i]=arr[i].upper()
        return arr
    
    if count_genres(arr):
        
        array1=count_groups()
        print(array1)
        final=final_decision(array1)
        return(final)


# In[59]:


print(main())

